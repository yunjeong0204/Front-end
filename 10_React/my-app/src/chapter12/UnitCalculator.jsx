import React, { useState } from 'react';
import UnitCounter from './UnitCounter';
import UnitInput from './UnitInput';

function UnitCalculator(props) {
  const [length, setLength] = useState(1);

  const handleChange = (e) => {
    setLength(Number(e.target.value)); //number input이여도 문자가 입력되므로 숫자로 바꿔줘야함
    // component에서 확인
  }

  return (
    <>
      <p>단위변환 계산기</p>
      <label>
        <input type="number" value={length} 
        onChange={handleChange} min={0}/>미터(m)
      </label>

      <hr />
      <UnitCounter length={length} onLengthChange={setLength}/>
      <br />
      <UnitInput unit="mm" length={length} />
      <br />
      <UnitInput unit="cm" length={length} />
      <br />
      <UnitInput unit="m" length={length} />
      <br />
      <UnitInput unit="km" length={length} />
      <br />
      <UnitInput unit="inch" length={length} />
      <br />
      <UnitCounter length={length} onLengthChange={setLength}/>
    </>
  );
}

export default UnitCalculator;