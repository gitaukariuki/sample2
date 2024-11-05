import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import startIcon from '../Assets/star_icon.png';
import startDullIcon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = ({ product }) => {
  const { addToCart, theme } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSizeChange = (size) => setSelectedSize(size);
  const handleQuantityChange = (e) => setSelectedQuantity(Number(e.target.value));

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={product.image} alt="" />
          ))}
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1 className={`ph1_${theme}`}>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={startIcon} alt="Star" />
          <img src={startIcon} alt="Star" />
          <img src={startIcon} alt="Star" />
          <img src={startIcon} alt="Star" />
          <img src={startDullIcon} alt="Star" />
          <p className={`ph1_${theme}`}>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Ksh {product.old_price}</div>
          <div className="productdisplay-right-price-new">Ksh {product.new_price}</div>
        </div>
        <div className={`productdisplay-right-description pdiv_${theme}`}>
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1 className={`ph1_${theme}`}>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="productdisplay-right-quantity">
          <h1 className={`ph1_${theme}`}>Select Quantity</h1>
          <input
            type="number"
            min="1"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button
          onClick={() => {
            addToCart(product.id, selectedSize, selectedQuantity);
            toast.success("Item added to cart", { autoClose: 1500, closeButton: false });
          }}
        >
          ADD TO CART
        </button>
        <ToastContainer toastStyle={{ fontWeight: "bold", marginTop: "68px" }} />
        <p className={`productdisplay-right-category pdiv_${theme}`}>
          <span>Category: </span>Women, T-shirt, Crop Top
        </p>
        <p className={`productdisplay-right-category pdiv_${theme}`}>
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
