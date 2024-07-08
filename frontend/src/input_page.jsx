import React, { useState } from 'react'
import "./input_page.css"

const input_page = () => {
  //take inputs- name,type,Buy Date, Expiry Date, Number, Quantity
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [buyDate, setBuyDate] = useState('Buy Date');
  const [expiryDate, setExpiryDate] = useState('Expiry Date');
  const [number, setNumber] = useState('Number');
  const [quantity, setQuantity] = useState('Quantity');

  //get current date and temporary expiry date
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(futureDate.getDate() + 7);

  function takeInput(event,func) {
    const {value} = event.target;
    func(value);
  }

  const inputValidation = (event,func) => {
    const {value} = event.target;
    if (isNaN(Number(value)) || Number(value) < 1) {
      func(0)}
    else takeInput(event,func);
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
{/*onfocus - changes type and oninput - takes input*/}
        <form id='info-form'>
          <input type='text' 
            onFocus={(event) => event.target.type = 'date'} 
            onInput={(event) => takeInput(event, setBuyDate)}
            value={buyDate}/>
          <input type='text' placeholder='Expiry Date' 
            onFocus={(event) => event.target.type = 'date'} 
            onInput={(event) => takeInput(event, setExpiryDate)}
            value={expiryDate}/>
{/*validates input as numeric and passes it to take the input */}
          <input type='text' 
            onInput={(event) => inputValidation(event, setNumber)}
            value={number}/>
          <input type='text'
            onInput={(event) => inputValidation(event, setQuantity)}
            value={quantity}/>
        </form>

        <button id='submit-button'>Submit</button>
      </div>
    </div>
  )
}

export default input_page