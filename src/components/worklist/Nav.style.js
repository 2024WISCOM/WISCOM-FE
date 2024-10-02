import styled from 'styled-components';

export const ButtonList = styled.div`
  width: 964px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    width: 550px;
  }

  @media (max-width: 767px) {
    width: 340px;
  }
`;

export const Line = styled.div`
  position: relative;
  background-color: white;
  width: 964px;
  height: 2px;
  margin-top: 42px;
  margin-bottom: 70px;

  @media (max-width: 1280px) {
    margin-top: 28px;
    width: 550px;
  }

  @media (max-width: 767px) {
    margin-top: 17px;
    margin-bottom: 90px;
    width: 340px;
    height: 1px;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: ${({ position }) => {
    switch (position) {
      case 'ALL':
        return '13px';
      case 'WEB & APP':
        return '250px';
      case 'GAME':
        return '495px';
      case 'AI':
        return '685px';
      case 'BIG DATA':
        return '900px';
      default:
        return '13px';
    }
  }};
  transition: left 0.3s ease;

  @media (max-width: 1280px) {
    width: 15px;
    height: 15px;
    top: -7.5px;
    left: ${({ position }) => {
      switch (position) {
        case 'ALL':
          return '10px';
        case 'WEB & APP':
          return '145px';
        case 'GAME':
          return '285px';
        case 'AI':
          return '383px';
        case 'BIG DATA':
          return '495px';
        default:
          return '10px';
      }
    }};
    transition: left 0.3s ease;
  }

  @media (max-width: 767px) {
    width: 8px;
    height: 8px;
    top: -4px;
    left: ${({ position }) => {
      switch (position) {
        case 'ALL':
          return '10px';
        case 'WEB & APP':
          return '93px';
        case 'GAME':
          return '180px';
        case 'AI':
          return '233px';
        case 'BIG DATA':
          return '300px';
        default:
          return '10px';
      }
    }};
    transition: left 0.3s ease;
  }
`;
