import React from 'react';
import {Outlet} from 'react-router-dom';

function Event(props) {
  return (
    <div>
      오늘의 이벤트
      <Outlet></Outlet>
    </div>
  );
}

export default Event;