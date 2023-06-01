import React, { useState } from 'react';

function SignupRectoring(props) {
  const [input, setinput] = useState({
    name: '',
    gender: '남자',
  });

  const {name, gender} = input; //구조분해할당

  const handleChange = (e) => {
    const {name, value} = e.target;
    // console.log(name, value);

    // 방법1
    // const copyObj = {
    //   ...input
    // };
    // copyObj[name] = value;
    // setinput(copyObj);

    // 방법2
    setinput(previnput => {
      return{
        ...previnput, //기존의 input 객체를 복사한 뒤
        [name] : value //name값을 키로 가진 속성의 값을 value로 설정
      }
    });
  }




  const handlebutton = (e) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handlebutton}>
      <label>
        이름:
        <input type="text" value={name} name='name' onChange={handleChange}/>
        {/* name 속성 추가 */}
      </label>

      <br />

      <label>
        성별:
        <select value={gender} name='gender' onChange={handleChange}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>

      <br />

      <button type='submit'>출력</button>
    </form>
  );
}

export default SignupRectoring;