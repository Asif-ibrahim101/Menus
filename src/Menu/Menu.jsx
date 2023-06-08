import React from 'react'

function Menu({ MenuData }) {
  return (
    <>
      {
        MenuData.map((item) => {
          return (
            <div key={item.id} className='menu_parts'>
              <div className="menu_image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className='menu_contents'>

                <div className='menu_title'>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>

                <p>{item.desc}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Menu
