import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap CSS 추가
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추간

import Header from "./pages/Header";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";


// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
  }
  #root{
    text-align: center;
  }
  *{
    box-sizing: inherit;
  }
  .cursor-pointer{
    cursor: pointer;
  }
  .text-ellipsis{
    white-space: nowrap; /* 줄 바꿈 안 함 - 얘는 무조건 한 줄을 만듦 */
    overflow: hidden; //넘친 부분
    text-overflow: ellipsis;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 부트스트랩 연습 */}
      {/* 1) 리액트 부트스트랩 */}
      {/* <Button variant="primary">Primary</Button>{' '} */}
      {/* 2) 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-primary"></button> */}

      {/* Quiz: Header 컴포넌트 추출 및 Outlet을 활용하여 라우팅 구성해보기 */}
      {/* src/pages/Header.js */}
      {/* 기본/라우팅 설정 */}
      <Routes>
        <Route path="/" element={<Header />}>
          {/* index: index route(여기서는 default child route) */}
          <Route index element={<Main />}/>
          {/* 상품별 상세페이지 여러 개를 라우팅하려면? URL파라미터 사용 */}
          {/* /detail/1로 접속하면 productId에 1이 담김 */}
          <Route path="/detail/:productId" element={<ProductDetail />}/>

          {/* 장바구니 페이지 */}
          <Route path="/cart" element={<Cart />} />          
        </Route>
      </Routes>

      <ToastContainer 
        position="top-right" //알람위치지정
        autoClose={2000} //자동 off 시간
        pauseOnFocusLoss={false} //화면 벗어나면 알람 정지
        theme="dark" //테마
      />

    </>
  );
}

export default App;
// ## Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/

// ## 패키지 설치하기
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios
