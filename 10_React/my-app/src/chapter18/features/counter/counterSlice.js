import { createSlice } from "@reduxjs/toolkit";
// 3. Redux State Slice 만들기

// state초기값으로 원시값(number 등), 배열, 객체 등 모든 데이터 타입 사용 가능
// 아래와 같이 주로 객체 형태로 사용함(가독성이 좋고 state관리 및 변경이 편함)
const initialState = { // 전역상태 초기값 주기
  value: 0,
};

// 전역 state 만드는 방법
// useState()랑 비슷한 역할을 하는데 Redux에서는 state하나를 slice라고 부름
// createSlice()함수: state이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와줌
// 인자값으로 name, initialState, reducers 속성을 갖는 객체를 넣음
export const counterSlice = createSlice({
  name: 'counter', //내가 만든 state이름(추가로 action이름을 만드는데도 쓰임)
  // initialState: initialState, 변수명, 속성명이 같아서 생략가능
  initialState, //state 초기값(위에서 객체 형태로 정의)
  // state를 변경하는 함수(=reducers)들을 정의하고 관련 action을 생성
  // 현재 state와 action 객체를 파라미터로 받아오고 필요한 경우 상태를 업데이트하고 새 상태를 반환하는 함수
  reducers: {
    increment: (state) => { //첫번째 매개변수(=파라미터)는 현재 state를 받아옴
      state.value += 1; //배열 또는 객체의 경우에도 직접 수정하는 형태로 작성 가능
      // How? Immer라이브러리가 내장되어 불변성 관리를 해줌
      // 실제로는 상태를 직접 변경하지 않고 내부적으로 state복사본을 만들어서 그 복사본을 변경하고 새로운 상태를 반환함
    },
    decrememt: (state) => {
      state.value -= 1;
    },

    incrememtByAmount: (state, action) => { //두번째 파라미터: action 객체 받아옴 = {type: 발생한 액션의 타입, payload: 화물, 전달 데이터}
      console.log(action);
      state.value += action.payload;
    },
  },
});
console.log(counterSlice); //결과: 객체

// slice사용하기 위해서 export해주기(먼저 createSlice 변수로 담고 export하기)
// 각 리듀서에 대한 액션 생성 함수들이 객체 형태로 들어있음
// 액션 생성 함수를 사용하면 해당 액션 객체가 만들어짐
export const { increment, decrememt, incrememtByAmount } = counterSlice.actions;

// 위에서 정리한 리듀서 함수들
export default counterSlice.reducer;

// 그래서 앞으로 Redux의 state를 변경하려면?
// 1) state 변경 함수(리듀서) 만들기
// 2) 다른데서 사용할 수 있게 export해주기 
// 3) 수정을 원할 때 그 함수를 실행해달라고 store에 요청을 해야됨 => dispatch()함수를 사용해서 store에 액션을 보냄