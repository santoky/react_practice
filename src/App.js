import { useState, useEffect } from 'react';
import axios from 'axios';
import RowOfNoticeList from './RowOfNoticeList';
import NoticeListPagination from './NoticeListPagination';

// 1. ASAP
// 페이지네이션
// 페이지네이션 10개 이상일때 처리 + 10개씩 넘기는 버튼
// 게시글 링크

// 2. 마무리
// new 아이콘
// 실행순서 체크 및 rending 반복요소 제거
// 테이블 인덱스에 넣은 삼항연산자 효율성 체크

// 3. NEXT
// 게시판 상세페이지

function App() {
  const [NoticeLists, setNoticeLists] = useState([]); // 전체 데이터
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 
  const [NoticeListPerPage] = useState(10);  // 한페이지에 보여줄 post의 수

  // indexOfLastPost: 해당 페이지에서 마지막 post의 index 번호
  const indexOfLastPost = currentPage * NoticeListPerPage;
  
  // indexOfFirstPost: 해당 페이지에서 첫번째 post의 index 번호
  const indexOfFirstPost = indexOfLastPost - NoticeListPerPage;
  // currentNoticeLists: 각 페이지에서 보여질 포스트 배열
  const currentNoticeLists = NoticeLists.slice(indexOfFirstPost, indexOfLastPost);
  
  const NoticeListPaginate = (pageNum) => {
    setCurrentPage(pageNum);
  };
  
  useEffect(() => {
    const fetchNoticeLists = async () => {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setNoticeLists(response.data);
      setLoading(false);
    };
    fetchNoticeLists();
  }, []);

  return (
  <div className="container">
    <RowOfNoticeList NoticeLists={currentNoticeLists} loading={loading} />
    <NoticeListPagination NoticeListPerPage={NoticeListPerPage} totalCountNoticeList={NoticeLists.length} NoticeListPaginate={NoticeListPaginate} />
  </div>
  )
}

export default App;