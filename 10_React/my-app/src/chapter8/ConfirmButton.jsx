import { useState } from "react";

// 사용자에게 확인을 요구하는 버튼 컴포넌트
function ConfirmButton() {
  const [isConfirmed, setisConfirmed] = useState(false);


  const handleConfirm = () => {
    setisConfirmed(isConfirmed =>!isConfirmed);
  }

  return(
    // disabled={isConfirmed} >> 버튼 비활성화 하기
    <button type="button" onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? '확인됨' : '확인하기'}
    </button>

    
  )
}
export default ConfirmButton;

// Quiz: 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리해보기
// 무엇을 해야할까?
// 1) isConfirmed라는 state만들기
// 2) 버튼을 클릭하면 isConfirmed상태를 바꾸는 handleConfirm이벤트 핸들러(함수)만들기
// 3) 조건부 렌더링(삼항 연산자 사용)으로 버튼의 내용을 '확인하기' => '확인됨'으로 바꾸기
// 4) 버튼 비활성화 처리