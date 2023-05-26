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

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  // 이 예제의 포인트
  // button 변수에 컴포넌트 대입(결과적으로는 리액트 엘리먼트 저장됨)
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick}/>
  } else{
    button = <LoginButton onClick={handleLoginClick}/>
  }

  return (
    <div>
      <Greeting isLogginIn={isLoggedIn}/>
      {button}
    </div>
  );
}
export default LoginControl;
