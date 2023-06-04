import React from 'react';

// quiz2: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고(직접 추가) 배열 렌더링 시 key값 추가해보기
const students = [
  {
    id: '아이디1',
    name: '이름',
  },  
  {
    id: '아이디2',
    name: '이름2',
  },
  {
    id: '아이디3',
    name: '이름3',
  },
  {
    id: '아이디4',
    name: '이름4',
  },
];

// 출석부 이름 출력하기
function AttendanceBook(props) {
  return (
    <ul>
      {/* quiz1: 학생 이름을 반복 렌더링 해보기 */}
      {students.map((student) => { //index 생략 가능
      //quiz2: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고 배열 렌더링 시 key값 추가해보기
      // 답: key={student.id}
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;