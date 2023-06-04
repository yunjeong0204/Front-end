import React, { useState } from 'react';
import ToolBar from './ToolBar';

function Landing(props) {
  // 사용자의 로그인 여부를 상태로 관리
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleClickLogin = () => {
    setisLoggedIn(true);
  };

  const handleClickLogout = () => {
    setisLoggedIn(false);
  }
  return (
    <div>
      <ToolBar 
        isLoggedIn={isLoggedIn}
        handleClickLogin={handleClickLogin}
        handleClickLogout={handleClickLogout}
      // 로그인 상태와 이벤트 핸들러를 툴바 컴포넌트로 넘겨 로그인 여부에 따라 툴바의 렌더링이 바뀜
      />
      <div style={{padding: 16}}>💻리액트 공부 사이트</div>
    </div>
  );
}

export default Landing;