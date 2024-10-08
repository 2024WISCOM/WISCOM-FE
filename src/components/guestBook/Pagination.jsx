import React from 'react';
import { PaginationContainer, PageButton } from './Pagination.style.js'; // Styled components 가져오기



const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
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
