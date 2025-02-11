
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinaryModule from 'cloudinary';

import User from './models/User.js';  // مدل کاربر
import Post from './models/Post.js';  // مدل پست

dotenv.config();
const app = express();
app.use(express.static('dist'));
const secret = process.env.SECRET;
const salt = bcrypt.genSaltSync(10);


// تنظیمات Cloudinary
const cloudinary = cloudinaryModule.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// تنظیم Multer برای آپلود فایل به Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blog_uploads', // اسم پوشه در Cloudinary
    format: async (req, file) => 'png', // فرمت ذخیره‌سازی
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});
const uploadMiddleware = multer({ storage });

// تنظیمات اولیه Express
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());


// اتصال به دیتابیس MongoDB
mongoose.connect(process.env.MONGOOSE_CONNECT)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(error => console.error('❌ MongoDB Connection Error:', error));

// **📌 آپلود تصویر برای ReactQuill**
app.post('/upload', uploadMiddleware.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ url: req.file.path }); // Cloudinary به طور خودکار `req.file.path` را برمی‌گرداند
});

// **📌 ثبت‌نام کاربر**
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

// **📌 ورود کاربر**
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  if (!userDoc) return res.status(400).json('User not found');

  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token, { httpOnly: true }).json({ id: userDoc._id, username });
    });
  } else {
    res.status(400).json('Wrong credentials');
  }
});

// **📌 دریافت پروفایل کاربر**
app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json('Unauthorized');

  jwt.verify(token, secret, {}, (err, info) => {
    if (err) return res.status(401).json('Invalid token');
    res.json(info);
  });
});

// **📌 خروج کاربر**
app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

// **📌 ایجاد پست جدید با آپلود عکس در Cloudinary**
app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json('Unauthorized');

  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) return res.status(401).json('Invalid token');

    const { title, summary, content } = req.body;
    const imageUrl = req.file.path; // آدرس تصویر آپلود شده در Cloudinary

    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: imageUrl,
      author: info.id,
    });
    res.json(postDoc);
  });
});

// **📌 ویرایش پست**
app.put('/post', uploadMiddleware.single('file'), async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json('Unauthorized');

  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) return res.status(401).json('Invalid token');

    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    if (!postDoc) return res.status(404).json('Post not found');

    if (postDoc.author.toString() !== info.id) {
      return res.status(403).json('You are not the author');
    }

    // در صورت آپلود تصویر جدید، URL جدید جایگزین شود
    const imageUrl = req.file ? req.file.path : postDoc.cover;

    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;
    postDoc.cover = imageUrl;
    await postDoc.save();

    res.json(postDoc);
  });
});

// **📌 دریافت تمام پست‌ها**
app.get('/post', async (req, res) => {
  res.json(await Post.find().populate('author', ['username']).sort({ createdAt: -1 }).limit(20));
});

// **📌 دریافت یک پست بر اساس id**
app.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
});


// **📌 شروع سرور**
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



