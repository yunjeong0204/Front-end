import React, { useEffect, useRef } from 'react';

function Textinputwithfocusbutton(props) {
  const inputEl = useRef(null); //초기값 null
  console.log(inputEl); //레퍼런스 객체라 부르는 일반적인 자바스크립트 객체를 반환함



  // useEffect - 렌더링 후 실행
  useEffect(() => {
    // 마운트됐을 때(렌더링 직후에)실행되므로 input엘리먼트가 나옴
    console.log(inputEl);

    // 여기서 currnet는 마운트 된 text input 엘리먼트를 담고 있음
    //활용 예: 로그인이나 회원가입 화면이 처음 보여졌을 때 굳이 클릭하지 않아도 포커스가 되어 있게 하려면 useEffect() + useRef()사용
    inputEl.current.focus();
  }, []) //빈 배열이 있어야함

  const onButtonClick = () => {
    // 실제 엘리먼트에 접근해서 focus()함수를 호출

  };

  return (
    <>
    {/* ref 속성에 inputEl을 넣어주기만 하면 해당 DOM에 접근 가능 */}
    {/* 마치 querySelector()와 같음 */}
      <input ref={inputEl} type="text"/>
      <button type='button' onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default Textinputwithfocusbutton;