import React, { useContext } from 'react'
import './DescriptionBox.css'
import { ShopContext } from '../../Context/ShopContext'

const DescriptionBox = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className={`descriptionbox-nav-box dbp_${theme}`}>Description</div>
        <div className={`descriptionbox-nav-box fade dbp_${theme}`}>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p className={`dbp_${theme}`}>Full, detailed textual description of products currently selected by user for inclusion into the shopping cart, hopefully!</p>
        <p className={`dbp_${theme}`}>Product description space here!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
