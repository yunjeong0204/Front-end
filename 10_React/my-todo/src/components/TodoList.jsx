import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-width: 513px;
  overflow-y: auto;
`;



// todos 배열을 props로 받아와서 map()함수를 사용해 여러 개의 TodoListItem 컴포넌트로 변환해 보여줌
function TodoList(props) {
  // console.log(props.todos); //props는 객체 todos는 배열 -> 객체안 배열 담는 법
  const { todos } = props;
  return (
    <TodoListWrapper>
      {/* <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/> */}

      {/* Quiz: TodoListItem으로 이루어진 배열로 반환하여 반복렌더링 하기 */}
      {/* 위에서 구조 분해 할당을 함 따라서  props.todos를 안 해도 됨 */}
      {todos.map((todo) => (
        <TodoListItem key = {todo.id} todo={todo}/>
      ))}

    </TodoListWrapper>
  );
}

export default TodoList;