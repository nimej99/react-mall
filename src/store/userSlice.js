import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({ //슬라이스변수명
  name: 'user', //상태명
  initialState: { name: 'kang', age: 25 }, //초기값
  reducers: {
    changeName(state) {
      state.name = 'minji' //useImmer 덕분에 직접 할당 가능
    },
    userIncrease(state, i) {
      state.age += i.payload //파라미터를 인식시키는 화물차 payload
    }
  }
})

export let { changeName, userIncrease } = user.actions;

export default user;
