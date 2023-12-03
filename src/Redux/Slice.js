import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set_user: (state, action) => {
      switch(action.type){
        case 'a':
          return {...state,value:action.payload};

        default:
           return state
      }
    },
    del_user: (state) => {
      switch(action.type){
        case 'a':
          return {...state,value: null};

        default:
           return state
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = userSlice.actions

export default userSlice.reducer