import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoState {
  todos: []
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo(){},
    
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, } = todoSlice.actions

export default todoSlice.reducer