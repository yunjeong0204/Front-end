import React, { useState } from 'react';
import Dialog from '../13.1.3/Dialog';

function SingUpDialog(props) {
  const [login, setLogin] = useState('');

  const handleChange = (e) => {
    setLogin(e.target.value)
  }

  const handleSignUp = (e) => {
    alert(`탑승을 환영합니다 ${login}`)
  }

  return (
    <Dialog
      title="화성 탐사 프로그램"
      message="당신을 어떻게 부르면 될까요?">
      
      <input type="text" 
      value={login}
      onChange={handleChange}/>

      <button type='button' onClick={handleSignUp}>가입하세요</button>
    </Dialog>
  );
}

export default SingUpDialog;