import React from 'react';

function ChildComponent(props) {
  console.log('자식 컴포넌트 렌더링 발생');
  return (
    <div>
      
    </div>
  );
}

// export default ChildComponent;

// React.memo()간단하게 사용하는 방법
export default React.memo(ChildComponent);
//결과: 로그에 자식 컴포넌트 렌더링X  (useCallback()사용했을 때만)