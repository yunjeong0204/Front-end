import React, { useState } from 'react';

function SignupRectoring(props) {
  const [input, setinput] = useState({
    name: '',
    gender: '',
  });

  const {name, gender} = input;

  const handleChange = () => {
    
  }

  const handlebutton = (e) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    e.preventDefault();
  };


  return (
    <form onSubmit={handlebutton}>
      <label>
        이름:
        <input 
          type="text" 
          onChange={handleChange}
          checked={name}/>

        <select 
          onChange={handleChange}
          checked={gender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>

      </label>

      <button>출력</button>
    </form>
  );
}

export default SignupRectoring;