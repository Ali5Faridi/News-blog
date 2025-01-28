import express from 'express';
import cors from 'cors';
import mongoose, { Mongoose } from 'mongoose';
import User from './models/User.js';
import post from './models/Post.js';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import fs from 'fs';

const uploadMiddleware = multer({dest: 'uploads/'});


dotenv.config();
const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET


const app = express();



app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static(__dirname +'uploads'));

mongoose.connect(process.env.MONGOOSE_CONNECT);


// Register
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try{
  const userDoc = await User.create({
    username,
     password: bcrypt.hashSync(password, salt),
    });
  res.send(userDoc);
    } catch (error){
        res.status(400).json(error);
    }
});

// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk){
    // logged in
    jwt.sign({username, id:userDoc. _id}, secret, {}, (error, token)=> {
     if (error) throw error;{
         res.cookie('token', token).json({
            id: userDoc._id,
            username,
         });
     }
    })

    } else {
        res.status(400).json('wrong credentials');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (error, info) => {
   if (error) throw error;
   res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('token', '').json('ok');
} );    

app.post('/post', uploadMiddleware.single('file') ,async (req, res) => {
    const{originalname, path} =req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (error, info) => {
        if (error) throw error;
        const {title, summary, content} = req.body;
    const postDoc = await post.create({
        title,
        summary,
        content,
        cover: newPath,
        author:info.id,

      });
        res.json(postDoc);
         });
});

app.put('/post', uploadMiddleware.single('file'), async (req, res) => {
    let newPath = null;
  
    if(req.file){
        const{originalname, path} =req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
    }
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (error, info) => {
        if (error) throw error;
        const {id, title, summary, content} = req.body;
        const postDoc = await post.findById(id);
        // const isAuthor = JSON.stringify() (postDoc.author) === JSON.stringify (info.id);
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);

        if(!isAuthor){
           return res.status(403).json('not allowed');
           
        }

       await postDoc.updateOne({
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
        });

        res.json(postDoc);
         });


});

app.get('/post', async (req, res) => {
    res.json(
        await post.find()
        .populate('author',['username'])
        .sort({createdAt: -1})
        .limit(15)
    );
});

 app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc =await post.findById(id).populate('author', ['username']);
    res.json(postDoc);
 });

app.listen(8000, () => {
  console.log('Server is listening on port , http://localhost:8000');
});