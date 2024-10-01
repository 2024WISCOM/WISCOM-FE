import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{ margin: '0 5px', padding: '5px', background: i === currentPage ? '#000' : '#fff', color: i === currentPage ? '#fff' : '#000' }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* 이전 페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ margin: '0 5px', padding: '5px', background: '#fff', color: '#000' }}
      >
        이전
      </button>

      {/* 페이지 번호들 */}
      {renderPageNumbers()}

      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ margin: '0 5px', padding: '5px', background: '#fff', color: '#000' }}
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
