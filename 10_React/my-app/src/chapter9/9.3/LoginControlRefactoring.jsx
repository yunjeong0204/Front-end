import React, { useState } from 'react';
import Greeting from '../9.1/Greetinh';

function LoginButton(props) {
  return(
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

function LoginControlRefactoring(props) {
  // 초기값을 false로 해놔서 계속 로그아웃 상태임 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Greeting isLogginIn={isLoggedIn}/>
      {/* 삼항 연산자로 if-else 구문을 JSX 내부에서 구현 */}
      {/* 조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 때 사용 */}
      {isLoggedIn
        ? <LogoutButton onClick={handleLogoutClick} />
        : <LoginButton onClick={handleLoginClick}/>
      }
    </div>
  );
}
export default LoginControlRefactoring;
