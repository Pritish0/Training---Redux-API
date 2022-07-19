import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    // all: [],
    active: [],
    completed: []
  },
  reducers: {
    addTask: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.all.push(action.payload);
      state.active.push(action.payload);
    },
    taskCompleted: (state, action) => {
      state.active = state.active.filter((item) => item!=action.payload);
      state.completed.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, taskCompleted } = todoSlice.actions

export default todoSlice.reducer