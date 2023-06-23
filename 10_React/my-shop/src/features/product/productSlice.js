import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productAPI";

const initialState = {
  productList: [],
  selectedProduct: null,
  status: 'idle', //API 요청 상태
};

// thunk를 이용한 비동기 작업 처리하기
// thunk 미들웨어: 액션을 디스패치 했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업을 실행
// 액션과 리듀서 중간에 끼어있는 중간자 역할, 액션 -> (미들웨어) -> 리듀서
// 주로 API 요청 같은 비동기 작업을 수행함

// thunk를 이용한 비동기 작업 처리 시 이점? 
// 1) API 요청에 대한 상태 관리 쉽게 가능(요청 시작-로딩중, 요청 성공 또는 실패 시 로딩이 끝났음을 명시)
// 2) 요청이 성공하면 응답에 대한 상태 관리, 실패하면 에러에 대한 상태 관리 등에 용이

// createAsyncThunk()함수를 이용하여 비동기 작업을 처리하는 액션 생성 함수를 만듦
export const getMoreProductsAsync = createAsyncThunk(
  'product/getMoreProductsAsync', // 첫번째 인자값: action type(개발자 임의로 작성)
  async () => { // 두번째 인자값: action이 발생했을 때 실행할 비동기 작업(api 요청 같은) ->productapi에서 했음 그래서 받아오면 됨
    const result = await getProducts(); //비동기 함수 실행 시 'pending' 상태
    return result; //리턴 해줘야함 //값을 반환하면 'fulfilled'상태로 바뀌고 action.payload에 담겨 리듀서 함수로 전달됨
  } 
);


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

    // Main.js에 상품 더보기 버튼 
    getMoreProducts: (state, action) => {
      // console.log(state, action);
      state.productList.push(...action.payload); //스프레드 연산자(...)사용
    },
    //productDetail.js에 상세페이지가 언마운트될 때 전역상태 초기화
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },

  //비동기 함수
  // thunk를 이용한 비동기적인 작업에는 extraReducers를 사용
  // (참고)
  // reducers로 동기 작업을 할 때는 액션 생성 함수를 자동으로 만들어주는 반면
  // extraReducers로 비동기 작업을 할 때는 액션 생성 함수를 자동으로 만들지 못 함
  extraReducers: (builder) => {
    builder
      .addCase(getMoreProductsAsync.pending, (state) => { //pending상태일 때 동작할 리듀서 함수
        state.status = 'loading';
      }) 
      .addCase(getMoreProductsAsync.fulfilled, (state, action) => { //fulfilled 때 동작할 리듀서 함수
        state.status = 'idle'; //complete, success 등 이름 많다
        state.productList.push(...action.payload); //스프레드 연산자(...)사용
      })
      .addCase(getMoreProductsAsync.rejected, (state) => { //rejected 때 동작할 리듀서 함수
        state.status = 'fail';
      })
  }
});

export const {getAllProducts, getSelectedProducts, getMoreProducts , clearSelectedProduct} = productSlice.actions;

export const selectProductList = (state) => state.product.productList;
export const selectSelectedProduct = (state) => state.product.selectedProduct;
// 
export const selectStatus = (state) => state.product.status;

export default productSlice.reducer;

// 정의만했기 때문에 store등록해주어야함 -> store.js에서 등록