import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import NewsItem from './NewsItem';
import { useParams } from 'react-router-dom';
import Categories from './Categories';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
}

// API를 요청하고 뉴스 데이터가 들어 있는 배열을 리액트 컴포넌트 배열로 변환하여 렌더링해주는 컴포넌트
function NewsList(props) {
  // 
  const {category = 'all'} = useParams(); //구조분해할당
  console.log(category); //기본 값 주기 전에 전체보기 눌렀을 때 undefined 나옴 
  // 이제 기본값 all줘서 전체보기 누르면 all 뜸


  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); //상태만든 이유: 로딩을 상태로 관리하여 API요청이 대기 중인지 판별

  // 컴포넌트가 화면에 보이는 시점에 API를 요청
  // useEffect()를 사용하여 컴포넌트가 처음 렌더링됐을 때 요청하면 됨
  useEffect(() => {
    // async 함수 선언 - await꼭넣어야함
    const fetchNewsData = async () => {
      setLoading(true); //로딩 시작
      try{
        // 
        // query값을 동적으로 받아오기
        // 카테고리가 all일 때는 아무것도 들어가면 안되고(공백도 있으면 안 됨), 그 외엔 %category=에 해당 카테고리 값 넣기 
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a07a850b68d64c57b01428fb75a458a9`);
        // const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=a07a850b68d64c57b01428fb75a458a9`);
        console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false); //로딩이 끝나면 false로 돌리겠다.
    };
    fetchNewsData();
    
  },[category]); //
  // 의존성 배열

  // 만약 로딩 창 만들 때 추천: react-spinners 또는 Lottie File 사용
  // 로딩 중일 때 어떤 것을 리턴할 것인가 (결과: 아주 잠깐 화면에 로딩 중이 뜸)
  if (!articles) {
    return <NewsListBlock>로딩 중..</NewsListBlock>
  }


  return (
    <NewsListBlock>
      {/* newsitem에 있는 article 넘기기*/}
      {/* <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/> */}

      {/* map함수로 반복 렌더링하기 */}
      {/* articles 초기값 null을 줘서 에러가 뜨기 때문에 articles && 넣기 */}
      {articles && articles.map((article) => {
        return(
          <NewsItem key={article.url} article={article}/> //props를 넘길 때 newsitem에서 props를 article로 줬기 때문에 article로 넘겨야함 
        )
      })}
    </NewsListBlock>
  );
}

export default NewsList;