import axios from 'axios';

import Card from '../components/Card';
import { useState } from 'react';


function Main(props) {

  let [more, setMore] = useState(2);

  return (
    <>
      <div className='main-bg' style={{ backgroundImage: `url(${props.bg})` }}></div>

      <div className="container">
        <div className="row">
          {props.data.map((data, i) => {
            return (
              <Card title={data.title} content={data.content} index={i} key={i} />
            )
          })
          }
        </div>
        <button onClick={() => {
          // isLoading true
          // 더보기 데이터요청이 3이 넘어가면 안불러오기
          if(more <= 3){
            axios.get(`https://codingapple1.github.io/shop/data${more}.json`)

              .then((result) => {
                console.log(result.data)
                console.log(props.data)

                let copy = [...props.data, ...result.data];
                // let copy = [...props.data]
                // copy.concat(result.data)
                props.setData(copy);
                setMore(more + 1)
                // isLoading false
              })
              .catch(() => {
                console.log('error')
                // isLoading false
              })
          }
        }}>더보기</button>
      </div>
    </>
  )
}

export default Main;