import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function AboutPage(props) {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const detail =  searchParams.get('detail'); //detail이라는 키값
  const mode =  searchParams.get('mode'); //mode 키값

  return (
    <div>
      <h1>쿼리스트링 사용</h1>
      <h3>{location.search}</h3>

      {/* 문자열 앞에 있는 ?를 지우고, &로 분리한뒤 key와 value를 파싱하는 작업이 필요했는데 
      현재는 useSearchParams()훅을 이용하여 간편하게 작업*/}
      <h3>useSearchParams</h3>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
    </div>
  );
}

export default AboutPage;