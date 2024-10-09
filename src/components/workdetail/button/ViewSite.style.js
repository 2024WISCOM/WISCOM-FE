import styled from 'styled-components';

export const VisitSite = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0 auto;
  align-items: center;
  font-size: 20px;
  line-height: 1;
  word-wrap: break-word;
  text-align: left;
  justify-content: center; 
  align-items: center;  
  
  @media (max-width: 1500px) {
    width: 95px;
  }


  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 20px;
    gap: 12px;
      width: 110px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 13px;
    gap: 3px;
    font-family: 'Pretendard-Regular';
    width: 80px;
  }
`;

export const Text = styled.div`

  @media (max-width: 1500px) {
    font-size: 15px;
    margin-top: 5px;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-top: 4.7px;

  }

  @media (max-width: 768px) {
    /* Mobile */
    margin-top: 4.7px;
    font-size: 13px;

  }
`
export const ViewSiteImage = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  position: relative;
  font-family: 'Pretendard-Medium';
  cursor: pointer;

  @media (max-width: 1500px) {
    width: 25px;
    height: 25px;
  }


  @media (max-width: 1024px) {
    /* Tablet */
    margin-top: 2px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    width: 18px;
    height: 18px;
    margin-right: 5px;
    margin-buttom: 3px;
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

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 13px;
    gap: 3px;
    font-family: 'Pretendard-Regular';
  }
`;