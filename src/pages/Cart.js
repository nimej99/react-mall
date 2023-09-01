import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userIncrease } from '../store/userSlice';
import { stockIncrease, pop } from '../store/stockSlice';


function Cart(props) {

  let user = useSelector((state) => state.user);
  let stock = useSelector((state) => state.stock);
  let dispatch = useDispatch();

  return (
    <>
      <div>
        <h6>등번호{user.age} {user.name}의 장바구니</h6>
        <button onClick={() => {
          dispatch(userIncrease(1))
        }}>나이먹기버튼</button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((data, i) =>
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.count}</td>
              <td><button onClick={() => {
                dispatch(stockIncrease(data.id))
              }}>+</button></td>
              <td><button onClick={() => {
                dispatch(pop(data.id))
              }}>삭제</button></td>
            </tr>
          )
          }
        </tbody>
      </Table>
    </>
  );
}

export default Cart;