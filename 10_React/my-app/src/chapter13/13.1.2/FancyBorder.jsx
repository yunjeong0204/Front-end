import React from 'react';
import './FancyBorder.css';

function FancyBorder(props) {
  console.log(props); 
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {/* props에 기본적으로 들어있는 children 속성을 사용 */}
      {props.children} 
    </div>
  );
}

export default FancyBorder;