// 리액트 함수 컴포넌트
// only JS로만 짠 코드(JSX 사용 안 함)
function LikeButton() {
  const [isClicked, setIsClicked] = React.useState(false);
  return React.createElement( 
    'button',
    {onClick: () => setIsClicked(true)},
    isClicked ? 'you liked this.' : 'Like'
  );
};

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));