# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Deutsch 🇩🇪
Projektbeschreibung
Dieses Projekt ist eine Blog-Plattform, die es Benutzern ermöglicht, Artikel zu erstellen, zu bearbeiten und anzuzeigen. Die Plattform besteht aus einem Backend (Node.js, Express, MongoDB) und einem Frontend (React, Vite). Benutzer können sich registrieren, anmelden, Beiträge erstellen und bearbeiten sowie die Beiträge anderer Benutzer anzeigen.

Funktionen
Benutzerauthentifizierung: Registrierung, Anmeldung und Profilverwaltung.

Beiträge erstellen und bearbeiten: Benutzer können neue Beiträge erstellen und bestehende bearbeiten.

Beiträge anzeigen: Alle Beiträge werden auf der Startseite angezeigt.

Bild-Upload: Benutzer können Bilder für ihre Beiträge hochladen (unterstützt durch Cloudinary).

Responsive Design: Die Plattform ist für mobile und Desktop-Geräte optimiert.

Technologien
Backend: Node.js, Express, MongoDB, Mongoose, Cloudinary, JWT (JSON Web Tokens).

Frontend: React, Vite, React Router, React Quill (Texteditor), Font Awesome (Icons).

Datenbank: MongoDB (für Benutzer- und Beitragsdaten).

Bildspeicher: Cloudinary (für Bild-Uploads).

Installation
Backend einrichten:

Klonen Sie das Repository:

bash
Copy
git clone (ssh key:)git@github.com:Ali5Faridi/News-blog.git

Navigieren Sie zum Backend-Verzeichnis:

bash
Copy
cd backend

Installieren Sie die Abhängigkeiten:

bash
Copy
npm install

Erstellen Sie eine .env-Datei und fügen Sie die folgenden Umgebungsvariablen hinzu:

env
Copy
MONGOOSE_CONNECT=mongodb_connection_string
SECRET=jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

Starten Sie den Server:

bash
Copy
node index.js

Frontend einrichten:

Navigieren Sie zum Frontend-Verzeichnis:

bash
Copy
cd frontend

Installieren Sie die Abhängigkeiten:

bash
Copy
npm install

Starten Sie die Anwendung:

bash
Copy
npm run dev
Verwendung

Registrierung: Erstellen Sie ein neues Konto über die Registrierungsseite.

Anmeldung: Melden Sie sich mit Ihren Anmeldedaten an.

Beiträge erstellen: Nach der Anmeldung können Sie neue Beiträge erstellen.

Beiträge bearbeiten: Bearbeiten Sie Ihre eigenen Beiträge über die Bearbeitungsseite.

Beiträge anzeigen: Alle Beiträge werden auf der Startseite angezeigt.

Mitwirkende
Ali und Momad

فارسی 🇮🇷
توضیحات پروژه
این پروژه یک پلتفرم وبلاگ است که به کاربران امکان ایجاد، ویرایش و نمایش مقالات را می‌دهد. این پلتفرم از یک بک‌اند (Node.js, Express, MongoDB) و یک فرانت‌اند (React, Vite) تشکیل شده است. کاربران می‌توانند ثبت‌نام کنند، وارد سیستم شوند، پست‌های جدید ایجاد کنند و پست‌های دیگر کاربران را مشاهده کنند.

ویژگی‌ها
احراز هویت کاربر: ثبت‌نام، ورود و مدیریت پروفایل.

ایجاد و ویرایش پست‌ها: کاربران می‌توانند پست‌های جدید ایجاد کرده و پست‌های موجود را ویرایش کنند.

نمایش پست‌ها: تمام پست‌ها در صفحه اصلی نمایش داده می‌شوند.

آپلود تصویر: کاربران می‌توانند برای پست‌های خود تصویر آپلود کنند (با استفاده از Cloudinary).

طراحی واکنش‌گرا: پلتفرم برای دستگاه‌های موبایل و دسکتاپ بهینه شده است.

فناوری‌ها
بک‌اند: Node.js, Express, MongoDB, Mongoose, Cloudinary, JWT (JSON Web Tokens).

فرانت‌اند: React, Vite, React Router, React Quill (ویرایشگر متن), Font Awesome (آیکون‌ها).

پایگاه داده: MongoDB (برای ذخیره‌سازی اطلاعات کاربران و پست‌ها).

ذخیره‌سازی تصاویر: Cloudinary (برای آپلود تصاویر).

نصب و راه‌اندازی
راه‌اندازی بک‌اند:

ریپوزیتوری را کلون کنید:

bash
Copy
git clone (ssh key:)git@github.com:Ali5Faridi/News-blog.git

به دایرکتوری بک‌اند بروید:

bash
Copy
cd backend

وابستگی‌ها را نصب کنید:

bash
Copy
npm install

یک فایل .env ایجاد کنید و متغیرهای محیطی زیر را اضافه کنید:

env
Copy
MONGOOSE_CONNECT=mongodb_connection_string
SECRET=jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

سرور را راه‌اندازی کنید:

bash
Copy
node index.js

راه‌اندازی فرانت‌اند:

به دایرکتوری فرانت‌اند بروید:

bash
Copy
cd frontend

وابستگی‌ها را نصب کنید:

bash
Copy
npm install

برنامه را اجرا کنید:

bash
Copy
npm run dev

نحوه استفاده
ثبت‌نام: از طریق صفحه ثبت‌نام یک حساب کاربری جدید ایجاد کنید.

ورود: با استفاده از اطلاعات حساب خود وارد سیستم شوید.

ایجاد پست: پس از ورود، می‌توانید پست‌های جدید ایجاد کنید.

ویرایش پست: پست‌های خود را از طریق صفحه ویرایش تغییر دهید.

نمایش پست‌ها: تمام پست‌ها در صفحه اصلی نمایش داده می‌شوند.

مشارکت‌کنندگان
ممد و علی 

لینک‌های مفید
مستندات React

مستندات Express

مستندات MongoDB

با تشکر از شما برای استفاده از این پروژه! اگر سوالی دارید، لطفاً با من تماس بگیرید. 🚀