import React, { useState } from 'react';

const styles = {
  button: {
    height: 40,
    width: 200,
  },
  warning: {
    backgroundColor: 'red',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: 'white',
  }
};

function WarningBanner(props) {
  console.log(props); //pros는 객체

  //해보기) props 값에 따라서 if문을 사용하여
  //전달받은 값이 false이면 null을 리턴
  // pros.warn이 false라면 null을 리턴하기때문에 컴포넌트는 렌더링되지 않음
  if (!props.warn) {
    return null;
  }

  return (
    <div style={styles.warning}>
      Warning!
    </div>
  );
}

function MainPage(props) {
  const [showWarning, setshowWarning] = useState(false);
  const handleToggleClick = () => {
    setshowWarning(prevshowWarning => !showWarning);
  };

  return (
    <div>
      <WarningBanner warn={showWarning}/>
      {/* 물론 보통의 경우 아래와 같이 조건부 렌더링으로 처리하는 것도 가능  */}
      {/* {showWarning && <WarningBanner />} */}

      <button type='button' style={styles.button} onClick={handleToggleClick}>
        {showWarning ? '감추기' : '보이기'}
      </button>
    </div>
  );
}

export default MainPage;