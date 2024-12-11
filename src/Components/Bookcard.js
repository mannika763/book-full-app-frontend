
import React from 'react';
import './Bookcard.css';
import { Link } from 'react-router-dom';

function Bookcard({ book }) {
  return (
    <div className="book-card">
      <div className="image-container">
        {book.images.map((image, index) => (
          <img key={index} src={image.url} alt={image.name} className="book-image" />
        ))}
      </div>
      <div className="book-info">
        <h3 className="book-name">{book.bookName}</h3>
        <p className="book-subject">{book.subject}</p>
        <p>
        <Link to={"/message-owner"} className='message-owner-link'>
          {book.messageOwner || "unknown"}
        </Link></p>
      </div>
    </div>
  );
}

export default Bookcard;
