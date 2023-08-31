import { createSlice } from "@reduxjs/toolkit";

let stock = createSlice({ //슬라이스변수명
  name: 'stock', //상태명
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ], //초기값
  reducers: {
    stockIncrease(state, id) {
      //내꺼
      // let findId = state.find((state)=> state.id == id.payload)
      // findId.count += 1

      let findId = state.findIndex((data) =>
        data.id == id.payload
      )
      state[findId].count++
    },
    order(state, item) {
      state.push(item.payload)
    },
    pop(state, id) {
      let findId = state.findIndex((data) =>
        data.id == id.payload
      )
      console.log(findId)
      state.splice(findId, 1);
    }
  }
})

export let { stockIncrease, order, pop } = stock.actions;

export default stock;