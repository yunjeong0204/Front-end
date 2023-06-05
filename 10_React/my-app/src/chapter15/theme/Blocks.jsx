import styled, { css } from 'styled-components';

const Wrapper = styled.div` //바깥 배경
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  /* background-color: lightgray; */
  /* 테마 사용해보기 */
  background-color: ${props => props.theme.grayBg};
`;

const Block = styled.div` //블록들
  padding: ${props => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  /*  */
  /* &:hover{
    cursor: pointer;
    color: '#ffbc00';
  } */

  /* ${props => 
    props.backgroundColor && 
    css`
      background: white;
      &:hover{
        background: black;
      }
    `} */
`;


// const RoundedButton = styled(Block)`
//   border-radius: 16px;
//   `;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green',
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue',
  },
];

function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem) => {
        return (
          <Block
            key={blockItem.label}
            padding={blockItem.padding}
            backgroundColor={blockItem.backgroundColor}
          >
            {blockItem.label}
          </Block>
        );
      })}
    </Wrapper>
  )
};

export default Blocks;