import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chaper3/3_4/JsxUse';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Root DOM Node에 렌더링 하도록 하는 함수 
// 처음으로 렌더링할 컴포넌트를 지정하는데 APP컴포넌트가 기본적으로 들어가있음
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

//3장 예제 
root.render(
  <JsxUse />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
