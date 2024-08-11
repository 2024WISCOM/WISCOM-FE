import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as H from './Header.style';

export default function Header({ isVisible, toggleMenu, setIsVisibleFalse }) {
  const [isAnimating, setIsAnimating] = useState(isVisible);
  const navigate = useNavigate();

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'WORKS', path: '/work-list' },
    { name: 'GUESTBOOK', path: '/guestbook' },
  ];

  const handleMouseMove = useCallback((event, item) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const percentageX = (x / rect.width) * 100;
    const percentageY = (y / rect.height) * 100;

    item.style.setProperty('--mouse-x', `${percentageX}%`);
    item.style.setProperty('--mouse-y', `${percentageY}%`);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu();
  };

  const handleClickWiscom = () => {
    navigate('/');
    setIsVisibleFalse();
  };

  return (
    <H.HeaderContainer>
      <H.Logo onClick={handleClickWiscom}>WISCOM</H.Logo>{' '}
      <H.MenuContainer onClick={toggleMenu}>
        <H.MENU>{isVisible ? 'CLOSE' : 'MENU'}</H.MENU>
        <H.HamburgerIcon isVisible={isVisible} />
      </H.MenuContainer>
      <H.NavMenu isVisible={isAnimating}>
        {menuItems.map((item, index) => (
          <H.NavItem
            key={item.name}
            isVisible={isVisible}
            index={index}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </H.NavItem>
        ))}
      </H.NavMenu>
    </H.HeaderContainer>
  );
}
