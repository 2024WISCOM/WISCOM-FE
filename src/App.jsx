import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/Main';
import About from './pages/About';
import WorkList from './pages/WorkList';
import WorkDetail from './pages/WorkDetail';
import GuestBook from './pages/GuestBook';
import HiddenAbout from './pages/HiddenAbout';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(true);

  const toggleMenu = () => {
    if (isVisible) {
      setAnimationCompleted(false);
      const navItemCount = 4;
      const totalAnimationTime = navItemCount * 0.1 + 0.1;
      setTimeout(() => {
        setAnimationCompleted(true);
      }, totalAnimationTime * 1000);
    }
    setIsVisible(!isVisible);
  };

  const setIsVisibleFalse = () => {
    setIsVisible(false);
    setAnimationCompleted(true);
  };

  return (
    <BrowserRouter>
      <Header
        isVisible={isVisible}
        toggleMenu={toggleMenu}
        setIsVisibleFalse={setIsVisibleFalse}
      />
      {!isVisible && animationCompleted && (
        <>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-list" element={<WorkList />} />
            <Route path="/work-detail" element={<WorkDetail />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/about-hidden" element={<HiddenAbout />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
