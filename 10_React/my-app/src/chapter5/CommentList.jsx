import Comment from "./Comment";

//댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name: '이름',
    content: '설명'
  },
  {
    name: '이름2',
    content: '설명2'
  },
  {
    name: '이름3',
    content: '설명3'
  },   
  {
    name: '이름4',
    content: '설명4'
  }, 
]

//댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return(
    <div>
      {/* quiz: props를 추가하여 name과 content 값 전달 */}
      {/* <Comment name= "이름" content="설명"/>
      <Comment name= "이름2" content="설명2"/>
      <Comment name= "이름3" content="설명3"/> */}

      {/* 배열을 동적으로 렌더링해야할 때에는 배열의 map()함수를 사용 
      (map(): 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦)
      앞으로 리액트에서 배열을 동적으로 렌더링해야할 때는 
      map()함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨*/}
      {comments.map((comment, index) => {
        return (
          <Comment name={comment.name} content={comment.content}/>
        );
      })}

      {/* map()함수의 결과 */}
      {
        // ex
        // [1, 2, 3].map(element => element *10)
        // [10, 20 30]
      
      }
    </div>

  );
}
export default CommentList;