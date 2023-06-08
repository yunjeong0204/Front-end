import React, { useState } from 'react';
import styled from "styled-components";
import TextInput from '../Ui/TextInput';
import Button from '../Ui/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

// 글 작성을 위한 페이지(=컴포넌트)
function PostWritePage(props) {
  // 작성하기 누르면 메인으로 돌아가기
  const navigate = useNavigate();

  // 글의 제목과 내용을 위한 state 만들기
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <Wrapper>
      <Container>
        {/* 글 제목 입력 */}
        <TextInput 
          height={20}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}/>

        {/* 글 내용 입력 */}
        <TextInput 
          height={480}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}/>

        {/* 글 작성 버튼  */}
        <Button 
          title="글 작성하기"
          onClick={() => {
            navigate("/");
          }}/>

      </Container>
    </Wrapper>
  );
}

export default PostWritePage;