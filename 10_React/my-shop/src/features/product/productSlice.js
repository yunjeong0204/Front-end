import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null
};

// 상품 정보를 담을 slice를 만듦
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProducts: (state, action) => {
      state.selectedProduct = action.payload;
    },

  },
});

export const {getAllProducts, getSelectedProducts} = productSlice.actions;

export const selectProductList = (state) => state.product.productList;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

export default productSlice.reducer;

// 정의만했기 때문에 store등록해주어야함 -> store.js에서 등록