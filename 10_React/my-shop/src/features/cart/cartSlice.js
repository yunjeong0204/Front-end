import { createSlice } from "@reduxjs/toolkit";

const initialState = { //전역 상태 초기값 만들기
  cartList: [
    // {
    //   id: '1',
    //   title: 'Arc 11 pro',
    //   price: 299000,
    //   count: 2
    // },
    // {
    //   id: '3',
    //   title: 'Aerus Z',
    //   price: 199000,
    //   count: 1
    // }
  ],
};

//장바구니 정보를 담을 slice만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 상품의 id값을 받아와서 해당 상품의 장바구니 수량을 +1, -1씩 증가 감소 만들기
    increaseCount: (state, action) => {
      const targetItem = state.cartList.find((product)=> product.id === action.payload);
      targetItem.count += 1;
    }, 
    decreaseCount: (state, {payload:id}) => {
      const targetItem = state.cartList.find((product) => product.id === id)  
      targetItem.count -= 1;
    }, 
    // initialState와 동일한 형태의 객체를 넘겨주면 장바구니에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 수량만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, {payload: item}) => { //productDetail.js에서 사용
      const targetItem = state.cartList.find((product) => product.id === item.id);
      if (targetItem) {
        targetItem.count += item.count;
      } else {
        state.cartList.push(item)
      }
    },
    // 장바구니에서 삭제
    removeItemFromCart: (state, {payload: item}) => {
      const targetItem = state.cartList.find((product) => product.id === item.id);
      state.cartList.splice(targetItem, 1);
    }
  }
})

export const {increaseCount,  decreaseCount, addItemToCart, removeItemFromCart} = cartSlice.actions;

export const selectCartList = (state) => state.cart.cartList; //Cart.js로 가져갈 거임

export default cartSlice.reducer;

// 정의만했기 때문에 store등록해주어야함 -> store.js에서 등록
// cart: cartSlice 등록