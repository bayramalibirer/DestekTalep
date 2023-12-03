import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice'
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    user:userReducer,
    
  },
  applyMiddleware(thunk){
    
  }
})