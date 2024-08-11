import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header';
import Main from './pages/Main';
import About from './pages/About';
import WorkList from './pages/WorkList';
import WorkDetail from './pages/WorkDetail';
import GuestBook from './pages/GuestBook';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(true);

  const toggleMenu = () => {
    if (isVisible) {
      setAnimationCompleted(false);
      const navItemCount = 5;
      const totalAnimationTime = navItemCount * 0.1;
      setTimeout(() => {
        setAnimationCompleted(true);
      }, totalAnimationTime * 1000);
    }
    setIsVisible(!isVisible);
  };

  const setIsVisibleFalse = () => {
    if (isVisible) {
      setAnimationCompleted(false);
      const navItemCount = 5;
      const totalAnimationTime = navItemCount * 0.1;
      setTimeout(() => {
        setAnimationCompleted(true);
      }, totalAnimationTime * 1000);
    }
    setIsVisible(false);
  };

  return (
    <BrowserRouter>
      <Header
        isVisible={isVisible}
        toggleMenu={toggleMenu}
        setIsVisibleFalse={setIsVisibleFalse}
      />
      {!isVisible & animationCompleted && (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-list" element={<WorkList />} />
          <Route path="/work-detail" element={<WorkDetail />} />
          <Route path="/guestbook" element={<GuestBook />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
