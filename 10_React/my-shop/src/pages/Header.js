import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

{/* 헤더영역: 상단에 내비게이션 바 만들기 */}
function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#" onClick={() => {navigate("/");}}>Shop</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => {navigate("/");}}>홈</Nav.Link>
                <Nav.Link onClick={() => {navigate("/cart");}}>장바구니</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </header>
      <Outlet />
    </>
  );
}

export default Header;