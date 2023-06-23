import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from '../features/cart/cartSlice';

function Cart(props) {
  const cartList = useSelector(selectCartList); //cartSlice에서 가져옴
  const dispatch = useDispatch();
  const farmatter = new Intl.NumberFormat('ko-KR'); //숫자표기

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {/* cartList 반복렌더링 및 데이터 바인딩 하기 */}
          {cartList.map((product, index) => {
            return(
              <tr key={product.id}>
                <td>{index + 1}</td> 
                <td>{product.title}</td> 
                <td>
                  <button onClick={() => {dispatch(increaseCount(product.id))}}>-</button>
                    {product.count}
                  <button onClick={() => {dispatch(increaseCount(product.id))}}>+</button>
                </td>
                <td>{farmatter.format(product.price * product.count)}원</td>
                <td> 
                  {/* 삭제 */}
                  <button onClick={() => {dispatch(removeItemFromCart(product.id))}}>❌</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;