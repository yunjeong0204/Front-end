import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";

// 전역 state를 보관하는 저장소 만들기
export const store = configureStore({
  // 전역스토어에 리듀서함수들 등록
  reducer: {
    product: productSlice,
  }
});