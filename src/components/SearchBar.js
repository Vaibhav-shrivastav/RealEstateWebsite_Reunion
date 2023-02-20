import React from 'react'

function SearchBar() {
  return (
    <>
        <div className="container">
            <span id='SearchLine'>Search Properties to rent</span>
            <input id='search' className='w-20 shadow-sm bg-white rounded' type="search" placeholder='Search properties'/>
        </div>

    </>
  )
}

export default SearchBar