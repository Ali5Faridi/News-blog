import React from 'react';
import { useParams } from 'react-router-dom';
import faridiImage from '../assets/faridi.jpg';
import mohamadImage from '../assets/mohamad.jpeg';

const authors = [
  {
    _id: "6799391e208f32441523d5e1",
    name: "Ali Asghar Faridi",
    image: faridiImage,
    description_en: "A software engineer specializing in full-stack development.",
    description_de: "",
    Email: "ali.faridi@dci-student.org"
  },
  {
    _id: "679b38ff7601a6502d5c6bf6",
    name: "Mohammad",
    image: mohamadImage,
    description_en: "A software engineer specializing in full-stack development.",
    description_de: "Ein Softwareingenieur, der sich auf Full-Stack-Entwicklung spezialisiert hat.",
    Email: "mohamad@dci-student.org"
  }
];

function Author() {
  const { id } = useParams();
  console.log('ID from URL:', id);

  const author = authors.find(a => a._id === id);
  console.log('Author:', author);

  if (!author) {
    return <h2>Author not found</h2>;
  }

  return (
    <div className="author-container">
      <img src={author.image} alt={author.name} className="author-image" />
      <h1 className="author-name">{author.name}</h1>
      <p className="author-description">{author.description_en}</p>
      <p className="author-description">{author.description_de}</p>
      <p className="author-Email">
        <a href={`mailto:${author.Email}`} className='author-email'>{author.Email}</a>
      </p>
    </div>
  );
}

export default Author;