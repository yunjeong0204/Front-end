function Layout(props) {
  return(
    <>
      {props.header}
      레이아웃의 크기는 가로 {props.width}, 세로{props.height}
      {props.footer}
    </>
  );
}
export default Layout;