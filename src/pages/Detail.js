import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Context1 } from '../App';
// import styled from 'styled-components';

// let Btn = styled.button`
//   background : ${props => props.color};
//   color : black;
//   padding : 10px;
// `

function Detail(props) {

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(true);
    }, 2000)
    setFade2('end');

    //서버 데이터요청 중 재렌더링시

    //cleanup function이 제일 먼저 실행됨, unmount시 실행
    return () => {
      clearTimeout(timer);
      //기존 데이터요청은 제거하라.
      setFade2('');
    }
  }, [])


  const [count, setCount] = useState(false);
  const [many, setMany] = useState(0);
  const [alert, setAlert] = useState(false);
  const [tab, setTab] = useState(0);
  const [fade2, setFade2] = useState('')

  useEffect(() => {
    if (isNaN(many) == true) {
      setAlert(true);
    }

    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000)

    //서버 데이터요청 중 재렌더링시

    //cleanup function이 제일 먼저 실행됨, unmount시 실행
    return () => {
      clearTimeout(timer);
      //기존 데이터요청은 제거하라.
    }
  }, [many])

  let { id } = useParams();
  let item = props.data.filter(
    (data) => data.id == id
  );


  return (
    <div className={`container start ${fade2}`}>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${item[0].id + 1}.jpg`} width="100%" alt='img' />
        </div>
        <div className="col-md-6">
          {
            !count
              ? <div>
                2초이내 구매시 할인
                {count}
                <button onClick={() => {
                  setCount(count + 1)
                }}>카운트버튼</button>
              </div>
              : null
          }
          <h4 className="pt-5">{item[0].title}</h4>
          <p>{item[0].content}</p>
          <p>{item[0].price}원</p>

          {
            !alert
              ? null
              : <p>숫자만입력가능합니다</p>
          }
          <input type="text" onChange={(e) => setMany(e.target.value)} />
          <button className="btn btn-danger">주문하기</button>
          {/* <Btn color='red'></Btn> */}
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent data={props.data} tab={tab} />

    </div>
  );
}
//if문은 html 밖에.
function TabContent(props) {
  // if(props.tab == 0){
  //   return <div>내용0</div>
  // } else if(props.tab == 1){
  //   return <div>내용1</div>
  // } else if(props.tab == 2){
  //   return <div>내용2</div>
  // }
  let { 재고 } = useContext(Context1);
  let [fade, setFade] = useState('');
  useEffect(() => {
    // react 18버전 오토매틱 배칭 기능으로 상태변경함수 근처에 같은 함수가 있을시 가장 마지막 함수를 렌더링에 적용하기 때문에 1순위인 공백을 무시하고 end만 바로 적용 시키기에 시차를 주는 방법
    let timer = setTimeout(() => {
      setFade('end');
    }, 100)

    return () => {
      clearTimeout(timer);
      setFade('');
    }
  }, [props.tab])
  return (
    <div className={`start ${fade}`}>
      {[<div>{재고[0]}</div>, <div>{재고[1]}</div>, <div>{재고[2]}</div>][props.tab]}
    </div>
  )

}


export default Detail;