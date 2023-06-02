import React from 'react';
import Card from './Card';

function ProfileCard(props) {
  return (
    <Card
      title= "abc"
      backgroundColor="#afdfaf">

      <p>안녕하세요</p>
      <p>리액트를 사용해서 개발 중입니다</p>
    </Card>
  );
}

export default ProfileCard;