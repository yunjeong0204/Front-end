import React from "react";
import './JsxUse.css'; //css파일 가져오기

function JsxUse() {
  // JSX의 사용법(문법)
  // 1.꼭 닫혀야 하는 태그
  // const element = (
    // <div>
    //   {/* <div> */}
    //   {/* <input> */}
    //   {/* <br> */}

    //   {/* HTML에서는 input 또는 br 태그를 사용할 때 닫지 않고 사용가능 
    //   하지만 리액트에서는 태그를 열었으면 무조건 닫아야 함*/}
    //   <div></div>
    //   <input />
    //   <br />
    // </div>
  // );


  // 2. 꼭 감싸져야만 하는 태그
  // 두개 이상의 태그는 무조건 하나의 태그로 감싸져야있어야 함
  // const element = (
    // <div>안녕하세요</div>
    // <div>안녕히계세요</div>

    // 반드시 하나의 부모 태그로 감싸져야함
    // <div>
    //   <div>안녕하세요</div>
    //   <div>안녕히계세요</div>
    // </div>

    // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는 게 별로 좋지 않을 때도 있음
    // HTML 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해질 수 있음
    // 이럴때 사용하는 것이 React의 Fragment
    // 개발자도구로 확인해보면 별도의 엘리먼트로 나타나지 않음
    // <React.Fragment>
    //   <div>안녕하세요</div>
    //   <div>안녕히계세요</div>
    // </React.Fragment>

    // React.Fragment 생략도 가능
    // <>
    //   <div>안녕하세요</div>
    //   <div>안녕히계세요</div>
    // </>
  // );


  // 3. JSX 안에 자바스크립트 값 또는 표현식 사용하기
  // 자바스크립트 변수(또는 함수)를 사용해야 할 때에는 {} 사용
  const name = 'react';
  const user = {
    firstname: 'yj',
    lastname: 'y'
  };

  const formatname = (user) => {
    return `${user.firstname} ${user.lastname}`;
  };

  // const element = (
  //   <>
  //     <div>{name} 배우기</div>
  //     <h1>hello, {formatname(user)}</h1>
  //   </>
  // );


  // 4. style과 className
  // 인라인 스타일은 객체 형태로 작성하는데 background-color처럼 -로 구분되어 있는 이름은 camelCase형태로 네이밍
  // (예: background-color -> backgroundColor)
  // class 값 설정할 때는 class =""가 아닌 className=""으로 설정
  const style ={
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, //기본 단위 px
    padding: '1rem' //다른 단위 사용 시 문자열로 설정
  };

  // const element = (
  //   <>
  //     <div style={style}>리액트 공부하기</div>
  //     <div className="gray-box"></div>
  //   </>
  // );


  // 5. JSX 주석
  // JSX내부의 주석은 JS 여러줄 주석을 중괄호로 감싼 형태
  // {/* 이런 형태 */}
  // JS주석은 우리가 아는 그대로 사용
  const element = (
    <>
      {/* 주석은 화면에 보이지 않습니다. */}
      // 주석은 화면에 보이지 않습니다.
      /* 주석은 화면에 보이지 않습니다. */

      <div
        //열리는 태그 내부에서는 이렇게 주석 작성
      >
        주석 테스트
      </div>

    </>
  );

  return element;
}
export default JsxUse; //JsxUse 컴포넌트 내보내기
// export를 해줘야 다른 곳에서 import해서 사용 가능