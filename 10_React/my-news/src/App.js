import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    // <>
    //   <NewsList />
    // </>

    // index.js에서 <BrowserRouter>를 미리써놔서 Routes부터 사용하면 됨

    <Routes>
      {/* ?는 categoty 값이 선택적이라는 의미.
        즉, 있을 수도 있고, 없을 수도 있다는 뜻
        ? 지우면 필수값이 됨 */}
      <Route path='/:category?' element={<NewsPage />}/>
    </Routes>
  );
}

export default App;

// 0. 패키지 설치
// npm install styled-components axios react-router-dom

// 1. newsapi 키 발급받기
// 아래 사이트 회원가입
// https://newsapi.org/
// Your API key is: a07a850b68d64c57b01428fb75a458a9

// API key
// ceb8d915e94f45079475365770e158c2

// 2. 사용할 API = 한국 뉴스를 가져오는 API
// https://newsapi.org/s/south-korea-news-api
// 1) 헤드라인 뉴스 불러오기
// 2) 헤드라인 중 특정 카테고리 뉴스 불러오기