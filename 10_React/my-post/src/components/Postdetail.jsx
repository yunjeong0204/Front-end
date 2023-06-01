import React, { useState } from 'react';

function Postdetail(props) {
  // console.log(props);
  const {posts, currentindex, setposts} = props;

  return (
    // 상세내용
    <div className='detail'>
      <h4>제목:{posts[currentindex]}</h4>
      <p>날짜: 2023년 1월 20일</p>
      <p>작성자: abc</p>
      <p>...상세내용...</p>     

      {/* 간단한 포스트 수정하기 */}
      <button onClick={() => {
        // 배열이나 객체의 state 변경하는 법
        // 새로운 배열 또는 객체를 만들어 set함수에 넣어줘야함
        const copyposts = [...posts]; //배열의 복사본 만들기(새로운 배열)
        copyposts[currentindex] = `${copyposts[currentindex]} - 수정`;
        setposts(copyposts);

      }}>
        수정하기
      </button>
    </div>
  );
}

export default Postdetail;

// 어떤 것을 컴포너트로 만들 것인가?
// 1. 반복적인 HTML이 발생할 때
// 2. 큰 페이지들(컴포넌트로 이루어짐)
// 3. 여기저기 자주 출현하는 것들(재사용을 위해)
// but, 컴포넌트로 너무 쪼개는 것도 안 좋음

// 배열이나 객체의 state변경할 때 주의
// 1. state 변경 함수의 특징
// 기존 state가 신규 state랑 같은 경우, 변경 안 함
// 2. 배열/객체의 특징
// 변수에 주소(참조)값이 저장됨