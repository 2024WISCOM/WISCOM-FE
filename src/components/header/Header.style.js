import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 60px;
  font-family: 'PlayfairDisplay';

  @media (max-width: 1024px) {
    /* Tablet */
    padding: 0px 40px;
    height: 90px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    padding: 0 20px;
    height: 80px;
  }
`;

export const Logo = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  cursor: pointer;

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 35px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 21px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  gap: 12px;
  cursor: pointer;

  @media (max-width: 768px) {
    /* Mobile */
    gap: 12px;
  }
`;

export const MENU = styled.div`
  font-size: 35px;
  position: relative;
  top: -2px;

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 22px;
    top: -1px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 18px;
    top: -0.4px;
  }
`;

export const HamburgerIcon = styled.div`
  width: 26px;
  height: 2.3px;
  background-color: #ffffff;
  position: relative;
  transition: transform 0.3s ease;
  margin-top: 1px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2.3px;
    background-color: #ffffff;
    transition: transform 0.3s ease;
  }

  &::before {
    top: -11px;
  }

  &::after {
    top: 11px;
  }

  ${({ isVisible }) =>
    isVisible &&
    `
    transform: rotate(45deg);
    width: 36px;

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

  @media (max-width: 1024px) {
    /* Tablet */
    margin-top: 1px;
    width: 20px;
    height: 2.3px;
    background-color: #ffffff;
    position: relative;
    transition: transform 0.3s ease;
    top: 0.3px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2.3px;
      background-color: #ffffff;
      transition: transform 0.3s ease;
    }

    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }

    ${({ isVisible }) =>
      isVisible &&
      `
    transform: rotate(45deg);
    width: 23px;

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

  @media (max-width: 768px) {
  top: 0.8px;
  margin-top: 1px;
    /* Mobile */
    width: 16px;
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
      top: -6.4px;
    }

    &::after {
      top: 6.4px;
    }

    ${({ isVisible }) =>
      isVisible &&
      `
    transform: rotate(45deg);
    width: 20px;


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

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  top: 100px;
  left: 0;
  padding: 20px 0 0 20px;
  color: #ffffff;
  animation: ${({ isVisible }) =>
      isVisible ? slideInFromLeft : slideOutToLeft}
    0.5s forwards; /* Ensure both have the same duration */

  @media (max-width: 768px) {
    /* Mobile */
    gap: 50px;
    padding: 10px 0 0 10px;
    top: 80px;
  }
`;

export const NavItem = styled.div`
  font-size: 80px;
  margin-left: 170px;
  position: relative;
  cursor: pointer;
  color: #ffffff;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  transform: ${({ isVisible }) =>
    isVisible ? 'translateX(0)' : 'translateX(-100%)'};
  transition-delay: ${({ index }) => index * 0.1}s; /* Delay for each item */

  &::first-letter {
    font-size: 90px;
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

  @media (max-width: 1024px) {
    /* Tablet */
    margin-left: 100px;

    &::first-letter {
      font-size: 100px;
    }
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 40px;
    margin-left: 20px;

    &::first-letter {
      font-size: 50px;
    }
  }
`;
