// Book 컴포넌트를 사용하는 상위 컴포넌트

import Book from "./Book"; //Book 컴포넌트 가져오기(자동완성 사용 권장)

function Library() {
  return (
    <div>
      {/* 컴포넌트 만들 때 다른 컴포넌트를 불러와서 사용 가능 */}
      {/* Book 컴포넌트에 props로 값을 전달 */}
      <Book name="모던 자바스크립트" numOfPage={300}/>
      <Book name="처음 만난 리액트" numOfPage={400}/>
      <Book name="리액트를 다루는 기술" numOfPage={500}/>
    </div>
  );
} //Library 컴포넌트는 총 3개의 Book 컴포넌트를 렌더링

export default Library; // Library 컴포넌트 내보내기