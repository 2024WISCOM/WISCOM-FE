import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffffff; /* 기본 글자 색상 */
`;

export const PageButton = styled.button`
  background: none; /* 배경색 없음 */
  border: none; /* 테두리 없음 */
  padding: 0 10px; /* 버튼 간격 */
  font-size: 20px; /* 폰트 크기 */
  color: ${({ active }) => (active ? '#ffffff' : '#ffffff')}; /* 모든 페이지 텍스트 색상 흰색 */
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')}; /* 선택된 페이지에만 밑줄 */
  cursor: pointer;

  &:hover {
    text-decoration: underline; /* 호버 시에도 밑줄 표시 */
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.5); /* 비활성화된 화살표는 반투명 */
    cursor: not-allowed;
  }
`;
