import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// 복습 jsx
function Jsonplaceholder(props) {
  const ListBlock = styled.div`
    width: 768px;
    margin: 0 auto;
  `;
  const [data, setData] = useState();

  const handleREquest =  async () => {
    try {
      const response = await axios.get(`https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do`);
      setData(response.moveList.moveNm);
    } catch (error) {
      console.error();
    }
  }
  return (
    <ListBlock>
      <button type='button' onClick={() => {handleREquest}}></button>
    </ListBlock>
  );
}

// http://json.parser.online.fr/

export default Jsonplaceholder;
// </header>
// <body>
//     <dataType>XML</dataType>
//     <items>
//         <item>
//             <icaoCode>RKJB</icaoCode>
//             <airportName>무안공항</airportName>
//             <tmFc>202109120000</tmFc>
//             <wd>30</wd>
//             <ws>6</ws>
//             <ta>24</ta>
//             <qnh>2988</qnh>
//         </item>
//     </items>
//     <numOfRows>10</numOfRows>
//     <pageNo>1</pageNo>
//     <totalCount>4</totalCount>
// </body>
// </response>
