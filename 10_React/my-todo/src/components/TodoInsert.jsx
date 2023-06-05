import React from 'react';
import styled from 'styled-components';
import { MdAdd as AddIcon } from "react-icons/md";
// Tip: as를 사용하여 별칭을 붙여 사용하면 주후 아이콘 바꿀때 한 곳만 바꾸면 돼서 편함

const TodoInsertWraaper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; //버튼이 끝으로 감

  &::placeholder{
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  background: #868e96;
  border: none;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;
;

  &:hover{
    background: #adb5bd;
  }
`;


// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert(props) {
  return (
    <TodoInsertWraaper>
      <StyledInput type='text' placeholder='할 일을 입력하세요'/>
      <StyledButton type='submit'>
        <AddIcon />
      </StyledButton>
    </TodoInsertWraaper>
  );
}

export default TodoInsert;