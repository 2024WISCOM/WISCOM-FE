import React from 'react';
import { PaginationContainer, PageButton } from './Pagination.style.js'; 



const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };


  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 10;

    //표시할 페이지 
    const startPageGroup =   Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1;
    const endPageGroup = Math.min(startPageGroup + maxPagesToShow - 1, totalPages);

    // 마지막 페이지가 범위보다 작을 때
    // if (endPage > totalPages) {
    //   endPage = totalPages;
    //   startPage = Math.max(1, endPage - maxPagesToShow + 1);
    // }

    for (let i = startPageGroup; i <= endPageGroup; i++) {
      pageNumbers.push(
        <PageButton
          key={i}
          onClick={() => handlePageChange(i)}
          active={i === currentPage} // 현재 페이지에만 active 상태
        >
          {i}
        </PageButton>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationContainer>
      {/* 이전 페이지 버튼 */}
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </PageButton>

      {/* 페이지 번호들 */}
      {renderPageNumbers()}

      {/* 다음 페이지 버튼 */}
      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
         &gt;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
