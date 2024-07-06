import React, { useState, useEffect } from 'react'
import "./input_page.css"

const input_page = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(futureDate.getDate() + 7);
  const [buyDate, setBuyDate] = useState(currentDate);
  const [expiryDate, setExpiryDate] = useState(futureDate);

  const [number, setNumber] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function takeInput(func) {
    const {value} = event.target;
    func(value);
  }

  function changeInputType(event) {
    event.target.type = event.target.type === 'text' ? 'date' : 'text';
  }

  function checkInputType(value, fun) {
    if (isNaN(value)) {
      fun(0);
      return false;
    }
    return true;
  }

  return (
    <div id='input-page-container'>
      <div id='input-box'>
        <input id='food-article-name' type='text' placeholder='Food Name' onInput={() => takeInput(setName)}></input>
        <div id='buttons-container'>
          <button className='input-types-button' value="perishable" 
          onClick={() => takeInput(setType)}>Perishable</button>
          <button className='input-types-button' value="fruits" 
          onClick={() => takeInput(setType)}>Fruits</button>
          <button className='input-types-button' value="vegetables" 
          onClick={() => takeInput(setType)}>Vegetables</button>
          <button className='input-types-button' value="groceries" 
          onClick={() => takeInput(setType)}>Groceries</button>
          <button className='input-types-button' value="miscelleanous" 
          onClick={() => takeInput(setType)}>iscelleanous</button>
        </div>

        <form id='info-form'>
          <input type='text' placeholder='Buy Date' 
          onFocus={() => {changeInputType(event)}} 
          onInput={() => takeInput(setBuyDate)}/>
          <input type='text' placeholder='Expiry Date' 
          onFocus={() => changeInputType(event)} 
          onInput={() => takeInput(setExpiryDate)}/>
          <input type='text' placeholder='Number'
          onInput={() => {
            if (checkInputType(number, setNumber)) {
              takeInput(setNumber);
            }
          }}/>
          <input type='text' placeholder='Quantity'
          onInput={() => takeInput(setNumber)}/>
        </form>

        <button id='submit-button'>Submit</button>
      </div>
    </div>
  )
}

export default input_page