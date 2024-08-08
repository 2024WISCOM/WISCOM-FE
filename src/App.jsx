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

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <BrowserRouter>
      <Header isVisible={isVisible} toggleMenu={toggleMenu} />
      {!isVisible && (
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
