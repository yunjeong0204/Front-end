import React from 'react';
import styled, { css } from "styled-components";

// 0. styled-components 설치하기
// npm을 사용하는 경우
// 명령어: npm install styled-components

// CSS in JS란?
// 이 문구가 뜻하는 그대로, 이 기술은 JS안에 CSS를 작성하는 것

//styled-components란?
// CSS문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트랑 궁합이 잘 맞음
// 백틱을 사용하여 구성 요소의 스타일을 지정

//다양한 문법은 공식 문서 참고
// https://styled-components.com/


// 1. 기본적인 사용법
//스타일링된 컴포넌트 형태로 반환됨
const Wrapper = styled.div`
  padding: 1rem;
  background: gray;


  /* 6.반응형 디자인 
  -일반 CSS를 사용할 때와 같이 media쿼리를 사용 가능
  -리액트스럽게 react-responsive 라이브러리 사용 */
  /* 기본적으로 가로 크기를 1024px에 가운데 정렬을 하고 
  가로크기가 작아짐에 따라 크기를 줄이고 768px미만이 되면 꽉 채우기 */
  width: 1024px;
  margin: 0 auto;
  @media screen and (max-width: 1024px){
    width: 768px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }



  
  `; 
//styled.주고싶은곳``;

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  `;
//vscode-styled-components 익스텐션 설치 필요 - 집에서 사용할 때 설치하기 


//2. props 사용하기
// 컴포넌트 형태라 props 사용이 가능(최고 장점 중 하나)
const Button = styled.button`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '40px'};
  color: ${props => props.dark ? 'white' : 'black'};
  background: ${props => props.dark ? 'black' : 'white'};
  border: 2px solid black;
  cursor: pointer;


  /* 3. & 문자를 사용하여 자기 자신 선택 가능 */
  &:hover {
    background: #b3b3b3;
  }


  /* 4. 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우 css를 불러와 사용해야한다 */
  /* props.inverted가 true일 때 스타일 적용 */
  ${props => 
    props.inverted && 
    css`
      background: white;
      color: #1f1f1f;
      border: 2px solid white;
      &:hover{
        background: #1f1f1f;
        color: white;
      }
  `}


  /* 버튼 사이 간격 띄우기 */
  & + & {
    margin-left: 1rem;
  }
  `;


// 5. 스타일 확장(커스텀)하기
// Button 컴포넌트에 모서리를 둥글게하는 style이 추가된 RoundedButton컴포넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;

`;



function StyledPage(props) {
  return (
    <Wrapper>
      <Title>안녕 리액트</Title>
      <Button width="200px" height="60px">Nornal</Button>

      {/* ={true}는 생략 가능 */}
      {/* <Button dark={true}>Dark</Button> */}
      <Button dark>Dark</Button>

      <Button inverted>Invered</Button>

      <RoundedButton>Rouded</RoundedButton>
    </Wrapper>
  );
}

export default StyledPage;