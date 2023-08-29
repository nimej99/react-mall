import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import bg from './bg.png';
import base from './data';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Event from './pages/Event';

function App() {

  let [data, setData] = useState(base);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{
              navigate('/')
            }}>Jammall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/detail')
            }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={<Main bg={bg} data={data} />} />
        <Route path='/detail/:id' element={<Detail data={data} />} />
        <Route path='*' element={
          <div>
            돌아가세요.
          </div>
        } />
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
