import React from 'react'
import "./input_page.css"

const input_page = () => {
  return (
    <div id='input-page-container'>
      <div id='input-box'>
        <input id='food-article-name' type='text' placeholder='Food Name'></input>
        <div id='buttons-container'>
          <button className='input-types-button' type="button" value="perishable">Perishable</button>
          <button className='input-types-button' type="button" value="fruits">Fruits</button>
          <button className='input-types-button' type="button" value="vegetables">Vegetables</button>
          <button className='input-types-button' type="button" value="groceries">Groceries</button>
          <button className='input-types-button' type="button" value="miscelleanous">iscelleanous</button>
        </div>
        <form id='info-form'>
          <input type="text"  placeholder='Buy Date' />
          <input type="text" placeholder='Expiry Date'/>
          <input type="text" placeholder='Number'/>
          <input type="text" placeholder='Quantity'/>
        </form>
        <button id='submit-button'>Submit</button>
      </div>
    </div>
  )
}

export default input_page