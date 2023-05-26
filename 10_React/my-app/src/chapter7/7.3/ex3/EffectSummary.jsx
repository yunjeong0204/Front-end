import { useEffect, useState } from "react";

function EffectSummary() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // (공통사항)
  //useEffect는 마운트 시에는 무조건 실행됨
  // useEffect의 return되는 함수는 언마운트 시에는 무조건 실행됨
  // <%c - 스타일 적용할 때 사용>

  // 렌더링 될 때마다(마운트 + 업데이트) 매번 실행됨, <의존성 배열이 없어서 계속 실행> 
  useEffect(() => {
    console.log('나는 매번 실행됨');

    return() => {
      //마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  }); 

  
  // count가 변할 때마다 실행됨
  useEffect(() => {
    console.log('%ccount가 변함','color: red; background: #ffdae0;');

    return() => {
      //마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
      // console.log('%ccount테스트', 'color: pink;');
    };
  }, [count]); 


  //name이 변할 때마다 실행됨
  useEffect(() => {
    console.log('%cname이 변함','color: blue; background: #e2d6fd;');

    return() => {
      //마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
      // console.log('%cname테스트', 'color: orange;');
    };
  }, [name]); 


  // 마운트될 때 한 번만 실행됨
  useEffect(() => {
    console.log('%c마운트될 때만 실행','color: yellow; background: black;');

    return() => {
      //언마운트 될 때만 실행됨 
      console.log('%c언마운트될 때만 실행','color: red; background: black;');
    };
  }, []); 


  return(
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
  );
}
export default EffectSummary;