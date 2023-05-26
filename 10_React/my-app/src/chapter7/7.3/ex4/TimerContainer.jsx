import { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  const[showTimer, setshowTimer] = useState(false);
  return(
    <div>
      {showTimer && <Timer />}
      <button type="button" onClick={()=> setshowTimer(!showTimer)}>On/Off 토글</button>
    </div>
  )
  
}
export default TimerContainer;