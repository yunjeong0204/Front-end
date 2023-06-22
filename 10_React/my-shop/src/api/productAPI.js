// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 함수로 만듦

import axios from "axios";
import { useDispatch } from "react-redux";

// 상품 목록 조회
// const getProducts = () => {
//   axios.get('https://my-json-server.typicode.com/yunjeong0204/db-shop/products')
//     .then((response) => {
//       // console.log(response.data);
//       dispatch(getMoreProducts(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// ;
// };

// async/await로 바꾸기
export const getProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/yunjeong0204/db-shop/products')
    if (response.status === 200) { //요청에 대한 응답의 상태가 200 OK일 때만 결과를 리턴
      return response.data;

    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { //서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.log(error);
    throw error; //발생한 에러 throw
  }
}

// 특정 상품 조회
export const getProductsById = async (id) => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/yunjeong0204/db-shop/products/${id}`)
    if (response.status === 200) { //요청에 대한 응답의 상태가 200 OK일 때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { //서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.log(error);
    throw error; //발생한 에러 throw
  }
};

// 만약에 서버로 데이터를 보내야 한다면? post사용
// json-server이용 시 테스트 가능
export const addProduct = async (product) => {
  try {
    const response = await axios.post(`http://localhost:3000/products`, {product})
    if (response.status === 200) { //요청에 대한 응답의 상태가 200 OK일 때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { //서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.log(error);
    throw error; //발생한 에러 throw
  }
};

// 상품 주문한다
export const orderProduct = async (productId, orderCount) => {
  try {
    const response = await axios.post(`http://localhost:3000/product-order`, {productId, orderCount})
    if (response.status === 200) { //요청에 대한 응답의 상태가 200 OK일 때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { //서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.log(error);
    throw error; //발생한 에러 throw
  }
};



