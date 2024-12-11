import React from 'react'
import { useState } from 'react'
import Bookcard from './Bookcard'
import { data } from './data'
import "./Store.css"

function Store() {
    const [searchQuery, setSearchQuery] = useState('');
  
    // Function to handle the search input change
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const preprocessString = (str) => str.replace(/\s+/g, '').toLowerCase();

    const filteredBooks = data.filter((book) => {
        const lowerCaseQuery = preprocessString(searchQuery);
        const preprocessedSubject = preprocessString(book.subject);
        
        const preprocessedTags = book.tags.map(tag => preprocessString(tag));
    
        // Check if the search query is in the preprocessed subject or any of the preprocessed tags
        const subjectMatch = preprocessedSubject.includes(lowerCaseQuery);
        const tagsMatch = preprocessedTags.some(tag => tag.includes(lowerCaseQuery));
    
        return subjectMatch || tagsMatch;
      });
 
  return (
    <div className='store-container'>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search for books...'
          value={searchQuery}
          onChange={handleSearchChange}
          className='search-input'
        />
      </div>
      <div className='book-container'>
        {filteredBooks.map((book, index) => (
          <Bookcard key={index} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Store
