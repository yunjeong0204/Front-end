import React, { useState } from 'react';

function ListKey(props) {
  const [list, setlist] = useState(['과제하기', '복습하기']);
  const [value, setValue] = useState('');

  const addToList = () => {
    // setlist(prevList => [value, ...prevList]); //value앞 - 앞에 추가
    setlist(prevList => [ ...prevList, value]); //value뒤 - 뒤에 추가
    setValue('');
  };

  // key값이 없을 때
  // 추가된 아이템뿐만 아니라 전체가 다 DOM에 업데이트 됨(비효율적)
  // 각 아이템에 key를 추가하지 않았기때문에 리액트는 어떤 항목이 업데이트 됐는지 알지 못 함
  // 모든 항목을 전부 업데이트 시킴
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <button type='button' onClick={addToList}>추가</button>

      <ul>
        {list.map((item) => { //index 생략 가능
          // return <li>{item}</li> >> 전체 업데이트

          // key값 넣어서
          return <li key={item}>{item}</li>

          // key값을 인덱스로 줬을 때 >> 전체 업데이트됨: 인덱스가 밀리기때문(권장X)
          // return <li key={index}>{item}</li>

        })}
      </ul>
    </>
  );
}

export default ListKey;