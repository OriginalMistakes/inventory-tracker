import React, { useState, useEffect } from 'react'
import "./input_page.css"

const input_page = () => {
  const [inputType, setInputType] = useState('text');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [buyDate, setBuyDate] = useState(Date());

  function takeInput(func) {
    const {value} = event.target;
    func(value);
    console.log(event.target);
  }

  useEffect(() => console.log(buyDate), [buyDate])

  return (
    <div id='input-page-container'>
      <div id='input-box'>
        <input id='food-article-name' type='text' placeholder='Food Name' onInput={() => takeInput(setName)}></input>
        <div id='buttons-container'>
          <button className='input-types-button' value="perishable" onClick={() => takeInput(setType)}>Perishable</button>
          <button className='input-types-button' value="fruits" onClick={() => takeInput(setType)}>Fruits</button>
          <button className='input-types-button' value="vegetables" onClick={() => takeInput(setType)}>Vegetables</button>
          <button className='input-types-button' value="groceries" onClick={() => takeInput(setType)}>Groceries</button>
          <button className='input-types-button' value="miscelleanous" onClick={() => takeInput(setType)}>iscelleanous</button>
        </div>
        <form id='info-form'>
          <input type={inputType}  placeholder='Buy Date' onFocus={() => {setInputType('date')}} onInput={() => takeInput(setBuyDate)}/>
          <input type={inputType} placeholder='Expiry Date' onFocus={() => {setInputType('date')}}/>
          <input type={inputType} placeholder='Number' onFocus={() => {setInputType('date')}}/>
          <input type={inputType} placeholder='Quantity' onFocus={() => {setInputType('date')}}/>
        </form>
        <button id='submit-button'>Submit</button>
      </div>
    </div>
  )
}

export default input_page