import { useEffect } from "react";

function Timer() {
  // 화면에 처음 렌더링됐을 때(=마운트됐을때) 한 번만 타이머 작동시킴
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중');
    }, 1000);


    // 화면에서 사라질 때 만든 타이머 정리하기
    // <언마운트될 때 실행되는>
    return() => {
      clearInterval(timer);
      console.log(`${timer} 타이머 종료`);
    };
  }, []);


  return(
    // Tip! 윈도우즈 이모지 단축키: 윈도우키 + 마침표(.)
    <div>
      <span>⏰타이머가 시작됐습니다</span>
    </div>
  );
}
export default Timer;