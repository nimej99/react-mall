import './App.css';
import { lazy, Suspense, createContext, useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import bg from './bg.png';
import base from './data';
import Main from './pages/Main';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// 메인페이지에 노출되지 않기 때문에 컴포넌트 로딩시 렌더링
const Detail = lazy(() => import('./pages/Detail.js'))
const Cart = lazy(() => import('./pages/Cart.js'))
const Event = lazy(() => import('./pages/Event'))
const LightHouse = lazy(() => import('./components/LightHouse.js'))


export let Context1 = createContext();


function App() {

  let [data, setData] = useState(base);
  let [재고, set재고] = useState([10, 11, 12]);

  let navigate = useNavigate();

  // 최근본상품
  useEffect(() => {

    let duplication = localStorage.getItem('watched');
    if (!duplication) {
      localStorage.setItem('watched', JSON.stringify([]))
    }

  }, [])

  // react-query
  let result = useQuery(['user'], () =>
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((data) => data.data)
  )

  // result.data
  // result.isLoading
  // result.error

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => {
            navigate('/')
          }}>Jammall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/cart')
            }}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {result.isLoading && '로딩중..'}
            {result.data && result.data.name}
            {result.error && '에러남'}
          </Nav>
        </Container>
      </Navbar>

      {/* 리액트 내장 html 태그 lazy 로딩시 활용 */}
      <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path='/' element={<Main bg={bg} data={data} setData={setData} />} />

          <Route path='/detail/:id' element={
            <Context1.Provider value={{ 재고 }}>
              <Detail data={data} />
            </Context1.Provider>
          } />

          <Route path='/cart' element={<Cart />} />

          <Route path='/event' element={<Event />}>
            <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
          </Route>

          <Route path='/lighthouse' element={<LightHouse />} />

          <Route path='*' element={
            <div>
              돌아가세요.
            </div>
          } />

        </Routes>
      </Suspense>


    </div>
  );
}

export default App;
