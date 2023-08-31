import { configureStore } from '@reduxjs/toolkit'

import user from './store/userSlice';
import stock from './store/stockSlice';


export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer //이름맘대로 : 슬라이스변수명
  }
})