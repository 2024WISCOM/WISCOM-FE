import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  font-family: 'Playfiar Display';

  @media (max-width: 1024px) {
    /* Tablet and smaller */
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    padding: 0 20px;
    height: 80px;
  }
`;

export const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin: 0;
  padding-left: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 20px;
    padding-left: 0px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    /* Mobile */
    gap: 8px;
  }
`;

export const MENU = styled.div`
  font-size: 25px;
  position: relative;
  top: -2px;

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 16px;
    top: -0.4px;
  }
`;

export const HamburgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: #ffffff;
  position: relative;
  transition: transform 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    transition: transform 0.3s ease;
  }

  &::before {
    top: -9px;
  }

  &::after {
    top: 9px;
  }

  ${({ isVisible }) =>
    isVisible &&
    `
    transform: rotate(45deg);

    &::before, &::after {
      top: 0;
    }

    &::before {
      transform: rotate(-90deg);
    }

    &::after {
      transform: rotate(90deg);
    }
  `}

  @media (max-width: 768px) {
    /* Mobile */
    width: 15px;
    height: 2px;
    background-color: #ffffff;
    position: relative;
    transition: transform 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      transition: transform 0.3s ease;
    }

    &::before {
      top: -6px;
    }

    &::after {
      top: 6px;
    }

    ${({ isVisible }) =>
      isVisible &&
      `
    transform: rotate(45deg);

    &::before, &::after {
      top: 0;
    }

    &::before {
      transform: rotate(-90deg);
    }

    &::after {
      transform: rotate(90deg);
    }
  `}
  }
`;

export const NavMenu = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  top: 100px;
  left: 0;
  padding: 20px 0 0 20px;
  color: #ffffff;

  @media (max-width: 768px) {
    /* Mobile */
    gap: 50px;
    padding: 10px 0 0 10px;
    top: 80px;
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const NavItem = styled.div`
  font-size: 60px;
  margin-left: 100px;
  position: relative;
  cursor: pointer;
  color: #ffffff;

  &::first-letter {
    font-size: 80px;
  }

  &:hover {
    color: #a9d8ea;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      #848afe 0%,
      #848afe 25%,
      #67b6d1 50%,
      #a9d8ea 70%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: none;
  }

  animation: ${({ isVisible }) =>
      isVisible ? slideInFromLeft : slideOutToLeft}
    0.3s ease forwards;
  animation-delay: ${({ index }) => index * 0.1}s;
  opacity: 0;

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 50px;
    margin-left: 60px;

    &::first-letter {
      font-size: 70px;
    }
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 50px;
    margin-left: 20px;

    &::first-letter {
      font-size: 50px;
    }
  }
`;
