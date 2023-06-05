import React, { useCallback, useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {
  const [count, setCount] = useState(0);

  // const state가 변경돼서 재렌더링될 때마다 매번 함수가 정의됨
  // 실행이 아니라 정의! 즉, 메모리 상에 새로운 함수가 만들어짐
  const handleClick = () => {
    setCount(count => count +1);
  };

  // useCallback()안에 넣으면 컴포넌트가 마운트될 때 한번만 함수가 정의됨
  // memoization
  // Props로 전달해야할 함수를 만들 때는 useCallback()을 사용해본다
  const handleClickCallback = useCallback(() => {
    setCount(count => count +1);
  }, []); 


  useEffect(() => {
    console.log('handleClick을 새롭게 정의:', handleClick);
  }, [handleClick]);


  useEffect(() => {
    console.log('handleClickCallback을 새롭게 정의:', handleClickCallback);
  }, [handleClickCallback]);



  return (
    <>
      <p>총 {count}번 카운트</p>
      <button type='button' onClick={handleClick}>
        카운트 증가(재렌더링 발생)
      </button>

      <button type='button' onClick={handleClickCallback}>
        useCallback 사용
      </button>

      {/* 자식 컴포넌트에 props로 함수를 전달 후 차이점 확인 */}
      {/* <ChildComponent handleClick={handleClick}/> */}
      <ChildComponent handleClick={handleClickCallback}/>
    </>
  );
}

export default ParentComponent;

// (중요) 리액트에서는 기본적으로 부모 컴포넌트가 렌더링되면 모든 자식 컴포넌트들도 무조건 렌더링된다.
// 이 때 React.memo()를 사용하면 props의 변경이 없을 경우 렌더링을 막아준다.
// (props의 변경이 있으면 당연히 렌더링되어야함)

//상위 컴포넌트에서 전달하는 함수에 useCallback()을 쓰면
// props로 전달되는 함수가 새로 정의되지 않기때문에 props의 변경이 없으므로 재렌더링 발생 안 함

// 최적화 관련 memoization기법들은 무분별하게 사용하면 안됨
// 재사용을 위해 어딘가에 저장해두기 때문에 메모리를 추가적으로 사용

//React.memo가 필요할 때?
// 1) 컴포넌트가 같은 props로 자주 렌더링될 때
// 2) 컴포넌트가 렌더링될 때마다 복잡한 로직(연산)을 처리해야할 때