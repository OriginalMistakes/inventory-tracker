import React from 'react'
import './homepage.css'

const Homepage = () => {
  return (
    <div id='homepage-container'>
        <div id='homepage-tiles-container'>
            <div className="home-tiles">
                <div className="refrigerators-tiles-container">
                    <div className="refrigerators-tiles">Veggies</div>
                    <div className="refrigerators-tiles">Fruits</div>
                </div>
                <div className="refrigerators-tiles-container">
                    <div className="refrigerators-tiles">Perishables</div>
                    <div className="refrigerators-tiles">Groceries</div>
                    <div className="refrigerators-tiles">Others</div>
                </div>
            </div>
            <div className="home-tiles">Expiry Soon</div>
            <div className="home-tiles">Recipes</div>
            <div className="home-tiles">Insights</div>
        </div>
    </div>
  )
}

export default Homepage