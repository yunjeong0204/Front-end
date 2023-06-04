import React, { useState } from 'react';

// 교재 코드 변형 (개선한 코드)
function ReservationRefactoring(props) {
  // 만약 여러 개의 state가 서로 관련이 있는 데이터라면 객체 형태로 묶어서 관리 가능
  // input에 name속성을 설정하고 이벤트가 발생햇을 때 이 값을 참조하여 객체 접근
  const [inputs, setinputs] = useState({
    breakfast: false,
    numberOfGuest: 2
  });

  const { breakfast, numberOfGuest } = inputs; //ES6차 구조 분해 할당을 통해 값 추출

  const handleinputChange = (e) => {
    const {type, name, checked, value} = e.target; //현재 이벤트가 발생한 대상
    // console.log(type, name, checked, value);
    const inputValue = type === 'checkbox' ? checked : value;
    console.log(name, inputValue);

    // 중요!!
    // React 상태에서 객체를 수정해야할 때에는,
    // 아래와 같이 기존 상태를 직접 수정해서 set함수에 넣으면 안됨
    // (inputs가 가리키는 객체의 내부 데이터만 바뀐것이지 참조값은 변하지 않았기 때문)
    // inputs[name] = inputValue;
    // setinputs(inputs); //아무일도 안 일어남 
    // set함수를 써도 재렌더링 발생 안 함(리액트가 객체가 바뀐 것을 감지하지 못 함)


    //위 처럼 사용XX, 그 대신 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용해야 함
    // 이러한 작업을 "불변성을 지킨다"라고 부름
    // 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트됐음을 감지할 수 있고 이에 따라 재렌더링이 진행됨
    // const copyInputs = {
    //   ...inputs //객체 복사하기 
    // };
    // copyInputs[name] = inputValue;
    // setinputs(copyInputs);
    // 결론: React에서 객체를 업데이트할 때에는 기존 객체를 직접 수정하면 안되고
    // 새로운 객체(기존 객체의 복사본)를 만들어서 그 객체에 변화를 주고 마지막으로 set함수에 넣어줘야함


    // 코드 간소화 버전(함수형 업데이트 활용한 방법)
    setinputs(prevInputs => ({
      ...prevInputs, //기존의 inputs객체를 복사한 뒤
      [name]: inputValue //name값을 키로 갖는 속성의 값을 inputValue로 설정
    }));
    // es6차 수업 예제 참고
    // 2_arrow_function - 객체를 암시적 반환하기
    // 9_spread_rest - 객체의 복사, 결합
    // 10_object_literal - 객체의 속성을 동적으로 정의하기
  };

  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuest}`);
    e.preventDefault();
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식 여부:
        <input 
          type='checkbox'
          name='breakfast' //name 속성 추가
          checked={breakfast}
          onChange={handleinputChange}/>
      </label>

      <br />

      <label>
        투숙객 수:
        <input 
          type="number"
          name='numberOfGuest' //name 속성 추가
          value={numberOfGuest} 
          onChange={handleinputChange}/>
      </label>

      <br />

      <button type='submit'>제출</button>
    </form>
  );
}

export default ReservationRefactoring;