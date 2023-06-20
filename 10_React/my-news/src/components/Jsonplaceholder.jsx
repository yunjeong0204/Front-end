import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const MovieItem = styled.div`
  display: flex;
`;

// 영화API
function Jsonplaceholder(props) {
  const {movieCd, movieNm, openDt} = article;
  const [data, setData] = useState();

  const handleREquest =  async () => {
    try {
      const response = await axios.get(` http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml`);
      setData(response.moveList.moveNm);
    } catch (error) {
      console.error();
    }
  }
  return (
    <MovieItem>
      <p>{movieNm}</p>
    </MovieItem>
  );
}

// http://json.parser.online.fr/

export default Jsonplaceholder;
