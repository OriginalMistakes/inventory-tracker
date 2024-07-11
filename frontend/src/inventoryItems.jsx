import React from 'react'

const InventoryItems = ({img, name, number, quantity, buyDate, expiryDate}) => {
  return (
    <div className="inventory-items">
            <div className='food-image-container'><img className='food-image' alt='apple-picture' src={img}/></div>
            <div className='food-data'>
                <div className='food-name'>{name}</div>
                <div className='food-info'>
                    <div className='food-info-numbers'>
                        <div className='food-info-numbers-items'>
                            <span>Number: {number}</span>
                            <span>Quantity: {quantity}</span>
                        </div>
                        <div>Buy Date: {buyDate}</div>
                        <div>Expiry Date: {expiryDate}</div>
                    </div>                   
                    <div className='food-info-type'>Fruits</div>
                </div>
            </div>
        </div>
  )
}

export default InventoryItems