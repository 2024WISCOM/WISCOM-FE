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
        return '268px';
      case 'GAME':
        return '527px';
      case 'AI':
        return '736px';
      case 'IoT':
        return '930px';
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
          return '160px';
        case 'GAME':
          return '313px';
        case 'AI':
          return '422px';
        case 'IoT':
          return '523px';
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
          return '104px';
        case 'GAME':
          return '201px';
        case 'AI':
          return '266px';
        case 'IoT':
          return '322px';
        default:
          return '10px';
      }
    }};
    transition: left 0.3s ease;
  }
`;
