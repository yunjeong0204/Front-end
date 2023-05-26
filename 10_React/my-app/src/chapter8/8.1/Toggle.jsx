import { useState } from "react";

function Toggle() {
  const [isToggleOn, setisToggleOn] = useState(true);

  // 방법1. 함수 선언문
  // function handleClick() {
  //   setisToggleOn(!isToggleOn);
  // }

  // 방법2. 화살표 함수
  const handleClick = () => {
    setisToggleOn(!isToggleOn);

    // (참고)State Merge 테스트 
    // setisToggleOn(!isToggleOn)
    // setisToggleOn(!isToggleOn) //제일 마지막 set함수로 병합됨
    // setisToggleOn(previsToggleOn => !isToggleOn);
    // setisToggleOn(previsToggleOn => !isToggleOn); //이전 결과(state)를 받아와서 동기적으로 처리
  };



  return(
    // 이벤트는 카멜 케이스(camelCase)를 사용
    // 함수(이벤트 핸들러)를 바로 전달하면 됨
    <button type="button" onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}
export default Toggle;