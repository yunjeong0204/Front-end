import React, { useRef } from 'react';

function Fileinput(props) {
  const fileinput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileinput.current.files); //Filelist객체
    alert(`선택된 파일: ${fileinput.current.files[0].name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일 업로드:
        <input ref={fileinput} type="file" />
        {/* 프로그래밍적으로 값을 설정할 수 없고
        사용자가 첨부한 파일의 정보만 읽어올 수 있기 때문에 항상 비제어 컴포넌트 */}
      </label>
      <br />
      <button type='submit'>제출</button>
    </form>
  );
}

export default Fileinput;