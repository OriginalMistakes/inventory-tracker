import React from 'react'
import './inventory.css'
import img from './assets/apple.jpg'
import dayjs from 'dayjs'

const inventory = () => {

    const number = 5;
    const quantity = 1000;
    const buyDate = dayjs().format('dddd DD-MM-YY');
    const expiryDate = dayjs('2024-04-26').format('dddd DD-MM-YY');

  return (
    <>
    <div id='header'>Inventory</div>
    <div id='inventory-items-list'>
        <div className="inventory-items">
            <div className='food-image-container'><img className='food-image' alt='apple-picture' src={img}/></div>
            <div className='food-data'>
                <div className='food-name'>Apple</div>
                <div className='food-info'>
                    <div id='food-info-numbers'>
                        <span className='food-info-numbers-number'>Number: {number}</span>
                        <span className='food-info-numbers-quantity'>Quantity: {quantity}</span>
                        <span className='food-info-numbers-buyDate'>Buy Date: {buyDate.toString()}</span>
                        <span className='food-info-numbers-expiryDate'>Expiry Date: {expiryDate.toString().split(" ")}</span>
                    </div>
                    <div className='food-info-type'>Fruits</div>
                </div>
            </div>
        </div>
        <div className="inventory-items">
            <img />
            <div className='food-data'>
                <div className='food-name'>Apple</div>
                <div className='food-info'>
                    <div id='food-info-numbers'>
                        <span className='food-info-numbers-number'>5</span>
                        <span className='food-info-numbers-quantity'>1000</span>
                        <span className='food-info-numbers-buyDate'>2024-04-06</span>
                        <span className='food-info-numbers-expiryDate'>2024-04-09</span>
                    </div>
                    <div className='food-info-type'></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default inventory