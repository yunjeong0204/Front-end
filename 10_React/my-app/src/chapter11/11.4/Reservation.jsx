import React, { useState } from 'react';

// 교재 코드
function Reservation(props) {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setbreakfast] = useState(false);
  const [numberOfGuest, setnumberOfGuest] = useState(2);
  const [roomType, setroomType] = useState('SINGLE'); //초기값 SINGLE 

  const handleBreakfastChange = (e) => {
    setbreakfast(e.target.checked);
  };

  const handleguestChange = (e) => {
    setnumberOfGuest(e.target.value);
  };

  const handleRoomChange = (e) => {
    // radio 버튼 누르면 선택
    setroomType(e.target.value);
  }; 

  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuest}, 룸 타입: ${roomType}`);
    e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식 여부:
        <input 
          type='checkbox'
          // checked 속성은 checkbox랑 radio타입에 존재하고 boolean값
          checked={breakfast}
          onChange={handleBreakfastChange}/>
      </label>

      <br />

      <label>
        투숙객 수:
        <input 
          type="number"
          value={numberOfGuest} 
          onChange={handleguestChange}/>
      </label>

      {/* 추가 예제 */}
      <br />
      룸 타입:

      <label>
        <input 
          type="radio"
          name="roomType"
          value="SINGLE"
          checked={roomType === 'SINGLE'}
          onChange={handleRoomChange}
        />
        싱글
      </label>

      <label>
        <input 
          type="radio" 
          name="roomType"
          value="TWIN"
          checked={roomType === 'TWIN'}
          onChange={handleRoomChange}
        />
        트윈
      </label>

      <label>
        <input 
          type="radio" 
          name="roomType"
          value="DOUBLE"
          checked={roomType === 'DOUBLE'}
          onChange={handleRoomChange}
        />
        더블
      </label>

      <br />

      <button type='submit'>제출</button>
    </form>
  );
}

export default Reservation;