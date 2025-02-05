

import React from 'react';
import { useParams } from 'react-router-dom';


const authors = [
  {
    _id: "6799391e208f32441523d5e1",
    name: "Ali Asghar Faridi",
    image: "../src/assets/faridi.jpg",
    description_en: "I am a programmer trained in web development and passionate about software development.",
    description_de: "Ich bin ein Programmierer, der in der Webentwicklung ausgebildet wurde und sich für Softwareentwicklung begeistert."
  },
  {
    _id: "679b38ff7601a6502d5c6bf6",
    name: "mohammad",
    image: "../src/assets/mohamad.jpeg",
    description_en: "A software engineer specializing in full-stack development.",
    description_de: "Ein Softwareingenieur, der sich auf Full-Stack-Entwicklung spezialisiert hat."
  }
];

function Author() {
  const { id } = useParams(); // دریافت id از آدرس URL
  console.log('ID from URL:', id);  // چاپ ID برای بررسی در کنسول

  // پیدا کردن نویسنده بر اساس _id
  const author = authors.find(a => a._id === id);  
  console.log('Author:', author);  // چاپ نویسنده برای بررسی در کنسول

  if (!author) {
    return <h2>Author not found</h2>; // اگر نویسنده پیدا نشد
  }

  return (
    <div className="author-container">
      <img src={author.image} alt={author.name} className="author-image" />
      <h1 className="author-name">{author.name}</h1>
      <p className="author-description">{author.description_en}</p>
      <p className="author-description">{author.description_de}</p>
    </div>
  );
}

export default Author;
