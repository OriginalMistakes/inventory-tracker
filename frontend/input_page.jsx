import React from 'react'

const input_page = () => {
  return (
    <div className='input-page-container'>
      <div className='input-box'>
        <form>
          <input></input>
          <input type=''></input>
          <div>
            <button type="button" value="perishable">Perishable</button>
            <button type="button" value="fruits">Fruits</button>
            <button type="button" value="vegetables">Vegetables</button>
            <button type="button" value="groceries">Groceries</button>
            <button type="button" value="miscelleanous">iscelleanous</button>
          </div>
          <form>
            <input type="text"  placeholder='Buy Date' />
            <input type="text" placeholder='Expiry Date'/>
            <input type="text" placeholder='Number'/>
            <input type="text" placeholder='Quantity'/>
          </form>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default input_page