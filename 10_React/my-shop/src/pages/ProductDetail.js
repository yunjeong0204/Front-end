import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

//서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedProducts, selectSelectedProduct } from '../features/product/productSlice';
import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';
import TabContents from '../components/TabContents';

// alert창 깜빡깜빡하게 만들기
// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; } // = 0%
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; } // = 100%
`;
const StyledAlert = styled(Alert)`
  /* 스타일 확장 추가 */
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail(props) {
  // URL 파라미터 가져오기
  const {productId} = useParams();
  const dispatch = useDispatch();

  const selectproduct = useSelector(selectSelectedProduct);   // store에서 state 꺼내오기
  const [showinfo, setShowinfo] = useState(true); // quiz: alert을 띄우고 3초 뒤에 사라지게 하기
  // console.log(selectproduct);

  const [ordernumber, setOrdernumber] = useState('1');   // 주문수량 입력

  // 탭 UI를 밑에 객체 형태로 표현해서 지워도 됨
  // const [showTabIndex, setShowTabIndex] = useState(0); //탭 상태, 탭 UI 만들기 

  const [showTab, setShowTab] = useState('detail'); //탭 UI 객체상태 만들기



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

  // 주문수량 입력
  const handleNumber = ((e) => {
    if (isNaN(e.target.value)) { //NaN인지 아닌지를 알려주는, 숫자면 false, 문자면 true(cosole창에서 확인가능)
      toast.error("💢숫자만 입력하세요");
      return; //리턴을 하기때문에 숫자는 입력은 되는데 문자는 입력안됨
    }
    setOrdernumber(Number(e.target.value)); //e.target.value가 문자열이라서 숫자로 바꾸기 위해 Number써줌
  });
  



  return (
    <Container className='pt-3'>
      {/* Quiz: Alert을 띄우고 3초 뒤에 사라지게 만들기 
      (힌트 : 처음 렌더링 됐을 때 setTimeout으로 타이머 설정*/}
      {showinfo && 
        <StyledAlert variant='info' onClose={() => setShowinfo(false)} dismissible>
          현재 34명이 보고 있습니다.
        </StyledAlert>
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


          {/* 주문수량 입력 UI */}
          <Col md={4} className='m-auto mb-3'>
            <Form.Control type="text" value={ordernumber} onChange={handleNumber}/>
          </Col>

          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>


      {/* 탭 UI 만들기 */}
      <Nav variant="tabs" defaultActiveKey="link-0" 
        className='my-3'>
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {
            // setShowTabIndex(0);
            setShowTab('detail');
          }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {
            // setShowTabIndex(1);
            setShowTab('review');
          }}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => {
            // setShowTabIndex(2);
            setShowTab('qa')
          }}>Q&amp;A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => {
            // setShowTabIndex(3);
            setShowTab('exchage');
          }}>반품/교환정보</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* 탭의 내용을 다 만들어놓고 조건부 렌더링하면 됨 */}
      {/* 방법1: 삼항 연산자 사용(비효율적) */}
      {/* {showTabIndex === 0
        ? <div>탭 내용1</div>
        : showTabIndex === 1
          ? <div>탭 내용2</div>
          : showTabIndex === 2
            ? <div>탭 내용3</div>
            : showTabIndex === 3
              ? <div>탭 내용4</div>
              : null
      } */}

      {/* 방법2. 컴포넌트로 추출 */}
      {/* TabContents.js만듦 */}
      {/* <TabContents showTabIndex ={showTabIndex}/> */}
      {/* 컴포넌트로 추출하려고 state를 만들었으나 밑에서 객체 형태로 다시 만들었기 때문에 지워도 됨 */}
      
      {/* 방법3. 배열이나 객체 형태로 만들어서 조건부렌더링하기(편법같은 거) */}
      {/* 배열 형태 */}
      {/* {
        [
          <div>탭 내용1</div>,
          <div>탭 내용2</div>,
          <div>탭 내용3</div>,
          <div>탭 내용4</div>,
        ] [showTabIndex]
      } */}
      {/* 객체 형태 */}
      {
        {
          'detail': <div>탭 내용1</div>,
          'review': <div>탭 내용2</div>,
          'qa': <div>탭 내용3</div>,
          'exchage': <div>탭 내용4</div>,
        }[showTab]
      }
    </Container>
  );
}

export default ProductDetail;