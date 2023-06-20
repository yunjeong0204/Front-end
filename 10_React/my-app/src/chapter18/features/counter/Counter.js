import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrememt, incrememtByAmount, increment } from './counterSlice';
import { useState } from 'react';

// 5. 리액트 컴포넌트에서 Redux Store와 Actions사용하기
function Counter(props) {
  // Redux Store에 있는 state를 가져오는 함수 - useSelector()
  const count = useSelector((state) => state.counter.value); //return생략한 것
  // state.counter.value이 아니라 state만 리턴하면 전역state 전부 가져옴
  // 가져온 value값을 count변수로 담기 

  // Redux Store에 요청을 보내주는 함수 -> 변수에 담기
  const dispatch = useDispatch();

  const [incrememtAmount, setIncrememtAmount] = useState('2');
  const incrememtValue = Number(incrememtAmount) || 0;

  return (
    <>
      <div>
        <button type='button'
        // 전역상태를 업데이트하는 유일한 방법 
        // dispatch()함수: 액션 객체를 스토어에 보냄
        // -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어줌
          onClick={() => dispatch(decrememt())}
          // decrememt()함수: 액션(객체) 생성 함수 - decrememt가 함수라서 괄호쳐서 실행
          // 함수 실행 결과:
          // {
          //   payload: undefined;
          //   type: "counter/decrememt";
          // }
        >
          감소
        </button>
        <span>{count}</span>
        <button type='button'
          onClick={() => dispatch(increment())}
        >
          증가
        </button>
      </div>
{/* --- */}
      <div>
        <input 
          type='text'
          value={incrememtAmount}
          onChange={(e)  => setIncrememtAmount(e.target.value)}
        />
        <button
          type='button'
          onClick={() => dispatch(incrememtByAmount(incrememtValue))}
          // onClick={() => dispatch(incrememtByAmount({value: 0, action: 'aaa'}))} //객체도 넣을 수 있음
        >
          Add Amount
        </button>
        <hr/>

      </div>
    </>
  );
}

export default Counter;