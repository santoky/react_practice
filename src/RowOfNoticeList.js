import React from "react";

const RowOfNoticeList = ({ NoticeLists, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <ul className="list">
      {NoticeLists.map((NoticeList) => (
        <li key={NoticeList.id} className="list_item">
          {NoticeList.title}
        </li>
      ))}
    </ul>
  );
};

export default RowOfNoticeList;