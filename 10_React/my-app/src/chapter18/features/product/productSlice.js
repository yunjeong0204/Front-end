import { createSlice } from "@reduxjs/toolkit";

//배열로 받아와서 map함수() 돌리기
const initialState = {
  value: [],
  // 다른 데이터들이 많으면 select함수를 만들고 가져다쓰면 됨
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productcrememt: (state, action) => {
      state.value.push(action.payload);
    }
  }
});
export const { productcrememt } = productSlice.actions;

export default productSlice.reducer;