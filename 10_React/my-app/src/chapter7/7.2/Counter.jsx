import { useState } from "react";

function Conuter() {
  //state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 해야함
  let [count, setCount] = useState(0); //초기값 0
  console.log(useState(0));
  // useState()의 결과로 배열이 반환됨 -> [초기값, set함수]
  // 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당

  // (참고) es5로 바꾼다면 --> es6를 많이 씀
  // const arr = useState(0);
  // const cnt = arr[0];
  // const setCnt = arr[1];

  // 3. 만약 state 미사용시
  // 이런 식은 카운트 값을 증가시킬 수는 있지만 재렌더링이 일어나지 않음
  // 다른 이유로 재렌더링이 발생 시, 값이 초기화됨
  let wrongCount = 0;

  // Quiz: 글자색바꾸기
  const [color, setColor] = useState('black');

  // Quiz: 버튼 내용 바꾸기
  const [buttontext, setbuttontext] = useState('신청');

  
  return(
    <div>    
      {/* 1. state를 사용 */}
      <p>총 {count}번 클릭했습니다</p>
      <button type="button" onClick={() => {setCount(count +1)}}>클릭</button> 


      {/* 2. state 직접 수정 */}
      {/* 직접 count state를 증가시키면 값은 증가되지만 재렌더링이 일어나지 않음 */}
      {/* 버튼클릭으로 값은 증가하지만 실행결과는 안 나옴 */}
      <p>총 {count}번 클릭했습니다</p>
      <button type="button" onClick={() => count++}>클릭 잘못된 방법</button> 


      {/* 3. state 미사용 */}
      <p>총 {wrongCount}번 클릭했습니다</p>
      <button type="button" onClick={() => {
        wrongCount++
        console.log(wrongCount); //세번째 클릭버튼 누르고 첫번째 버튼 누른 후 다시 세번째 버튼누르면 값이 초기화됨
      }}>클릭 잘못된 방법
      </button> 


      {/* Quiz: 글자색바꾸기 */}
      <p style={{color: color}}>클릭했습니다</p>
      <button type="button" onClick={() => {setColor('red');}}>
        클릭
      </button> 


      {/* Quiz: 버튼 내용 바꾸기 */}
      <button type="button" onClick={() => {setbuttontext('마감');}}>
        {buttontext}
      </button> 

    </div>
  );
}
export default Conuter;