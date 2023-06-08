import React from 'react'

function Categories({fetchedCategories, filteredCategories}) {
  return (
    <>
      <div className="categories_btn">
        {
          fetchedCategories.map((category, index) => {
            return (
              <button
                className='btns'
                key={index}
                onClick={() => {
                  filteredCategories(category)
                }}
              >
                {category}
              </button>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories
