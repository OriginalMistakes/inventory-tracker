import React, { useState } from 'react'
import './inventory.css'
import dayjs from 'dayjs'
import img from './assets/apple.jpg'
import InventoryItems from './inventoryItems'

const inventory = () => {

    const dafaultItemList = [{img: {img}, name: 'name', number: 'number', quantity: 'quantity', buyDate: 'Buy Date', expiryDate: 'Expiry Date'}]
    const [inventoryList, setInventoryList] = useState(defaultItemList)

  return (
    <>
    <div id='header'>Inventory</div>
    <div id='inventory-items-list'>
        {inventoryList.map(listItem => (item, index) => {
            <InventoryItem
            key={index}
            img={item.img}
            name={item.name}
            number={item.number}
            quantity={item.quantity}
            buyDate={item.buyDate}
            expiryDate={item.expiryDate}
          />
        })}
    </div>
    </>
  )
}

export default inventory