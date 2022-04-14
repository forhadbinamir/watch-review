import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Review from './Components/Review/Review';
import DashBoard from './Components/DashBoard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';
import ReviewInfo from './Components/ReviewInfo/ReviewInfo';
import { createContext, useEffect, useState } from 'react';

export const ContextAPIData = createContext()

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('ReviewData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <ContextAPIData.Provider value={[products]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/reviewInfo/:reviewId' element={<ReviewInfo></ReviewInfo>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </ContextAPIData.Provider>
  );
}

export default App;
