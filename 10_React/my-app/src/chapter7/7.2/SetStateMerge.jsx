import { useState } from "react";

function SetStateMerge() {
  const [result, setResult] = useState(2) //초기값 2

  const handleAdd = () => {
    // setResult(result + 5);

    //해결하기 위해 콜백함수로 바꾸기
    setResult((result) => {return result + 5})
  };
  const handleSub = () => {
    // setResult(result - 3);

    //콜백함수로 바꾸기
    setResult((result) => {return result - 3})

  };
  const handleMul = () => {
    // setResult(result * 2);

    //콜백함수로 바꾸기
    setResult((result) => {return result * 2})

  };
  const handleDiv = () => {
    // setResult(result / 2);

    //콜백함수로 바꾸기
    setResult((result) => {return result / 2})

  };

  // 문제 발생 예제
  const handleMixCale = () => {
    handleAdd(); //예상결과: 2 + 5 = 7
    handleMul(); //예상결과: 7 * 2 = 14
    // 근데 결과는 4가 나옴 => handleMul()만 실행이됐기때문
  };
  // set함수 = setState()는 비동기로 처리됨(=비동기 함수)
  // 그래서 하나의 state를 동시에 여기저기서 수정하려고 할 때 문제 발생 
  // 같은 state를 바꾸는 set함수가 동시에 여러번 실행되면 의도한값이 안나올 수 있음
  // 그래서 state와 상관없는 새로운 값을 넣는 것이 아니면 콜백형태로 쓸 것을 권장
  // 이 때 콜백함수의 첫번째 매개변수로 이전 state를 받아들임
  // 이를 해결하기 위해 콜백함수로 바꿔줌


  return (
    <div>
      <p>계산 결과 : {result}</p>
      <button type="button" onClick={handleAdd}>+ 5</button>
      <button type="button" onClick={handleSub}>- 3</button>
      <button type="button" onClick={handleMul}>* 2</button>
      <button type="button" onClick={handleDiv}>/ 2</button>

      {/* // 문제 발생 예제 */}
      <button type="button" onClick={handleMixCale}>MixCale</button> 
    </div>
  );
}
export default SetStateMerge;