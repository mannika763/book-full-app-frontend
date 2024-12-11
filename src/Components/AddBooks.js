import React from 'react'
import "./AddBooks.css"
import { useNavigate } from 'react-router-dom'

function AddBooks() {

    const navigate = useNavigate();

   function handleClick(){
    navigate("/listyourbookhere");
    }

  return (
    <>
      <div className='list-container'>
        <div className='text' onClick={handleClick}>
          List Your Books
        </div>
      </div>
    </>
  )
}

export default AddBooks
