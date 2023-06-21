import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

//서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedProducts, selectSelectedProduct } from '../features/product/productSlice';

function ProductDetail(props) {
  // URL 파라미터 가져오기
  const {productId} = useParams();

  const dispatch = useDispatch();

  // store에서 state 꺼내오기
  const selectproduct = useSelector(selectSelectedProduct);
  console.log(selectproduct);


  // 금액에, - 숫자 포맷 적용 javascript international에서
  const formatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency', currency: 'KRW'
  });

  // 처음 마운드됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 
  // 그 결과를 리덕스 스토어에 저장
  // useEffect를 안 쓰면 
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ...api call... 
    const foundProduct = data.find((product) => {
      return product.id === productId;
    })
    if (!foundProduct) return;
    console.log(foundProduct);
    // productSlice
    dispatch(getSelectedProducts(foundProduct));
  }, []);

  // quiz: alert을 띄우고 3초 뒤에 사라지게 하기
  const [showinfo, setShowinfo] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowinfo(false);
    }, 3000);
    // 불필요하게 타이머가 계속 생기는 것을 정리
    return () => {
      clearTimeout(timeout); //언마운트 되기 직전에 실행이 됨 - chpater7 effectsummer.jsx참고
    }
  }, []);

  if (!selectproduct) {
    // return null; //아무것도 렌더링하지 않겠다.
    return <div>상품이 존재하지 않습니다.</div>
  }

  return (
    <Container className='pt-3'>
      {/* Quiz: Alert을 띄우고 3초 뒤에 사라지게 만들기 
      (힌트 : 처음 렌더링 됐을 때 setTimeout으로 타이머 설정*/}
      {showinfo && 
        <Alert variant='info'>
          현재 34명이 보고 있습니다.
        </Alert>
      }
      

      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          {/* 처음 초기값 selectedProduct이 null여서 오류가 뜨기때문에 옵셔널체이닝(=?)을 붙여줌*/}
          <img src={selectproduct?.imagePath} width="80%" />
        </Col>
        <Col md={6}>
        {/* .pt-5 = padding-top: 3rem*/}
          <h4 className='pt-5'>{selectproduct?.title}</h4>
          <p>{selectproduct?.content}</p>
          <p>{formatter.format(selectproduct?.price)}원</p>
          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>
      
    </Container>
  );
}

export default ProductDetail;