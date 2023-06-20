// productList컴포넌트는 CountetApp에서 Counter밑에 렌더링
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productcrememt } from './productSlice';

function ProductList(props) {
  const item = useSelector((state) => state.producter.value);
  const dispatch = useDispatch();

  const [product, setProduct] = useState('');

  return (
    <>
      <div>
        <p>상품추가 만들기</p>
        <input 
          type='text'
          value={product}
          onChange={(e) => setProduct(e.target.value)}/>
        <button 
          type='button'
          onClick={() => (dispatch(productcrememt(product)))}              
        >
          추가
        </button>
        <br />
        <ul>
          {item.map((item) => {
            return(
              <li>{item}</li>
              )
          })}
        </ul>
      </div>
    </>
  );
}

export default ProductList;