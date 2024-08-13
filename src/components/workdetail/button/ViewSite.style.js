import styled from 'styled-components';

export const VisitSite = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0px;
  align-items: center;
  font-size: 25px;

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 20px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 13px;
    gap: 3px;
    font-family: 'Pretendard-Regular';
  }
`;

export const ViewSiteImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  position: relative;
  font-family: 'Pretendard-Medium';
  cursor: pointer;

  @media (max-width: 1024px) {
    /* Tablet */
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    width: 17px;
    height: 17px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
