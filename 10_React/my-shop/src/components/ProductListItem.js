import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 방법1: 스타일드 컴포넌트로 스타일 확장 
const StyledCol = styled(Col)`
  cursor: pointer;
`;

// 방법2: 공통 스타일로 작성해두고 쓰기

function ProductListItem(props) {
  const { product } = props;

  // 클릭했을 때 이동 경로 설정하기
  const navigate = useNavigate();
  return (
    // Main.js에서 <Container>, <Row>를 다 가져오는 것이 아닌 반복하는 <Col>값만 가져옴
    <StyledCol md={4} className='cursor-pointer'>
      {/* data.json에 있는 imagePath, title, price 사용 */}
      <img src={product.imagePath} width="80%" 
        onClick={() => {
          // /detail/해당상품id
          navigate(`/detail/${product.id}`);
        }}/>
      <h4>{product.title}</h4>
      <p>{product.price}원</p>
    </StyledCol>
  );
}

export default ProductListItem;