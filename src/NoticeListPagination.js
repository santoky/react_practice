import React from "react";
const pagination = {
    listStyle: 'none',
}

const pagination_item = {
    display: 'inline',
    border: '1px solid black',
    padding: '5px',
}

const NoticeListPagination = ({ NoticeListPerPage, totalCountNoticeList, NoticeListPaginate }) => {
  const pageNum = [];
  
  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalCountNoticeList / NoticeListPerPage); i++) {
    pageNum.push(i);
  }

  return (
    <ul style={pagination}>
      {pageNum.map((num) => (
        <li
          key={num}
          style={pagination_item}
          onClick={() => NoticeListPaginate(num)}
        >
          {num}
        </li>
      ))}
    </ul>
  );
};

export default NoticeListPagination;