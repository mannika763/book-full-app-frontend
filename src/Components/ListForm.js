import { display, height, margin, width } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function ListForm() {
  const [bookName, setBookName] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter' && tagInput) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleTagRemove = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/api/auth/submit-form', {
            bookName,
            subject,
            category,
            images,
            tags,
        });

        console.log('Form submitted successfully:', response.data);
        // Optionally clear the form fields
        setBookName('');
        setSubject('');
        setCategory('');
        setImages([]);
        setTags([]);
        setTagInput('');
    } catch (error) {
      if (error.response) {
          // Server responded with a status other than 2xx
          if (error.response.status === 401) {
              setError('Please log in to submit the form.');
              // Optionally redirect to the login page or show a login prompt
          } else {
              setError(error.response.data.error || 'An error occurred');
          }
      } else {
          // Network error or other issues
          setError(error.message || 'An error occurred');
      }
  } 
};


  return (
    <div style={styles.mainContainer}>
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
            required
          >
            <option value="">Select a category</option>
            <option value="competition">Competition</option>
            <option value="novel">Novel</option>
            <option value="school book">School Book</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="images">Upload Images (at least 3):</label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageUpload}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={tagInput}
            onChange={handleTagInput}
            onKeyPress={handleTagKeyPress}
            placeholder="Press enter to add tags"
            style={styles.input}
          />
          <div style={styles.tagContainer}>
            {tags.map((tag, index) => (
              <div key={index} style={styles.tag}>
                {tag}
                <button
                  type="button"
                  onClick={() => handleTagRemove(index)}
                  style={styles.removeTagButton}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
      {error && (
                <div style={{ color: 'red' }}>
                    {error}
                </div>
            )}
    </div>
    </div>
  );
};

const styles = {
  mainContainer:{
        height: "90vh",
        width:"100%",
        margin: "auto",
        display: "flex"
  },
  container: {
    maxWidth: '600px',
    height: "52%",
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  tagContainer: {
    marginTop: '10px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '20px',
    padding: '5px 10px',
    marginRight: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  removeTagButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
export default ListForm
