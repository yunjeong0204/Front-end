import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chaper3/3_4/JsxUse';
import Library from './chaper3/Library';
import Clock from './chaper4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';
import Comment from './chapter5/Comment';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Conuter from './chapter7/7.2/Counter';
import SetStateMerge from './chapter7/7.2/SetStateMerge';


const root = ReactDOM.createRoot(document.getElementById('root'));
//Root DOM Node에 렌더링 하도록 하는 함수 
// 처음으로 렌더링할 컴포넌트를 지정하는데 APP컴포넌트가 기본적으로 들어가있음
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

//3장 예제 
// root.render(
//   // <JsxUse />
//   <Library />
// );


//4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드 -> setInterval사용
// (참고로 실제 개발에서 이렇게 쓰는 경우는 없음)
// setInterval(() => {
//   root.render(
//     <Clock /> //자동완성 
//   );  
// }, 1000);


// 5장 예제
// root.render(
//   <PropsUse /> 
// );  


// 5장
// root.render(
//   <CommentList />
// );

// 6장 
// root.render(
//   <NotificationList /> 
// );  

// 7장 7.2 -> Counter.jsx
// root.render(
//   <Conuter />
// );

// 7장 7.2 -> SetStateMerge.jsx
root.render(
  <SetStateMerge />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
