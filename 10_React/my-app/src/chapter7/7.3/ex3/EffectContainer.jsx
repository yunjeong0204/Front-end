import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer(params) {

  const [isVisible, setisvisible] = useState(true)
  return(
    <div>
      {/*  */}
      <button type="button" onClick={()=> setisvisible(true)}>나타나라</button>
      <button type="button" onClick={()=> setisvisible(false)}>사라져라</button>

      {isVisible && <EffectSummary />}
      {/* 논리 연산자의 short-circuit을 이용한 조건부 렌더링 */}
    </div>
  );
  
}
export default EffectContainer;