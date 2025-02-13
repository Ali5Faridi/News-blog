import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';


function Post({_id, title, summary, createdAt, cover, content, author }) {
  let formattedDate = '';
  
  if (createdAt) {
    try {
      formattedDate = format(new Date(createdAt), 'MMMM dd, yyyy HH:mm');
    } catch (error) {
      console.error('Invalid date:', error);
      formattedDate = 'Invalid date';
    }
  } else {
    formattedDate = 'No date available';
  }

  return (
    <div className='post'>
      
      <div className="image">
        <Link to={`/post/${_id}`}>
        <img src={cover} alt="Post Cover" /> {/* استفاده از URL کامل Cloudinary */}
        </Link>
        
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
       
        <p className="info">
          <a href={`/author/${author?._id}`} className="author">{author?.username || 'Unknown author'}</a>
          <time>{formattedDate}</time>
        </p>
        <p className='summary'>{summary}</p> 
      </div>
    </div>
  );
}

export default Post;

