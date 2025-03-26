import { Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './components/Background/Background';
import { Home } from './pages/Home/Home';
import { Picture } from './pages/Picture/Picture';
import { Library } from './pages/Library/Library';
import { Logo } from './components/Logo/Logo';
import { ImageDetail } from './pages/ImageDetail/ImageDetail';

export const App = () => {
  return (
    <>
      <Logo />
      <Background />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/picture' element={<Picture />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/library/:id' element={<ImageDetail />}></Route>
      </Routes>
    </>
  );
};
