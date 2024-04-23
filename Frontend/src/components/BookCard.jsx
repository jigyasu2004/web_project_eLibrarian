import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, role }) => {
    const { name, author, imageUrl, availableQuantity, ISBNCode } = book;

    return (
        <div className='book-card'>
            <img src={imageUrl} alt={name} className='book-image' />
            <div className="book-details">
                <h3>{name}</h3>
                <p>Author: {author}</p>
                <p>Available: {availableQuantity}</p>
                <p>ISBN Code: {ISBNCode}</p>
            </div>
            {role === "admin" ?
                <div className="book-actions">
                    <button><Link to={`/book/${book._id}`} className='btn-link'>Edit</Link></button>
                    <button><Link to={`/delete/${book._id}`} className='btn-link'>Delete</Link></button>
                </div>
                :
                <div className="book-actions">
                    <button onClick={() => handleRequestBook(book._id)}>Request Book</button>
                </div>
            }
        </div>
    )
}

export default BookCard;
