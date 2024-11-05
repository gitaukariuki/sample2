import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = ({ category, banner }) => {
  const { all_product, theme } = useContext(ShopContext);
  const productsPerPage = 12;
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState('');

  const filteredProducts = all_product
    .filter((item) => item.category === category)
    .slice(0, 76);

  if (sorting === '0') filteredProducts.sort((a, b) => a.new_price - b.new_price);
  else if (sorting === '1') filteredProducts.sort((a, b) => b.new_price - a.new_price);

  const totalProducts = filteredProducts.length;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>{`Showing ${startIndex + 1}-${endIndex}`}</span> of {totalProducts} products
        </p>
        <div className={`shopcategory-sort_${theme}`}>
          Sort By
          <select
            name="shopcategory-sort"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="0">Low to High</option>
            <option value="1">High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(startIndex, endIndex).map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      {endIndex < totalProducts && (
        <button className="shopcategory-loadmore" onClick={() => setPage(page + 1)}>
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;
