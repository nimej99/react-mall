import React, { memo, useMemo, useState, useTransition, useDeferredValue } from 'react';

function LightHouse(props) {

  // memo = props가 변할 때만 재렌더링됨
  let Child = memo(function (props) {
    console.log('자식재렌더링')
    return (
      <>
        <div>자식임. 부모 렌더링시 자식도 재렌더링됨 자식이 무겁다면? 부모도 오래걸린다.</div>
        <p>{props.count} props 쓸때만 렌더링 </p>
      </>
    )
  })

  let [count, setCount] = useState(0);
  let [name, setName] = useState('');

  function 함수() {
    return '반복문10억번돌린 결과'
  }

  // 컴포넌트 렌더링시 1회만 실행
  let result =
    useMemo(() => {
      return 함수()
    }, []);

  //성능저하 실험 useTransition 함수 시간을 늦춤(html만들고 div 만개만들고 셋함수 실행)
  //isPending은 startTransition함수가 실행중일떄 true, 오래걸리는 작업 미루고 로딩중 ㄱㄱ
  let [isPending, startTransition] = useTransition();
  let a = new Array(10000).fill(0);

  let state = useDeferredValue(name) //이것도 늦게처리함

  return (
    <div>
      <Child count={count} />
      <button onClick={() => {
        setCount(count + 1)
      }}>+</button>

      <input type="text" onChange={(e)=>{
        // 성능저하 상태변경 함수를 감싸준다.
        startTransition(()=>
          setName(e.target.value)
        )
      }} />
      {
        isPending 
        ? '로딩중' 
        : a.map(()=>{
          return <div>{state}</div>
        })
      }
    </div>
  );
}

export default LightHouse;