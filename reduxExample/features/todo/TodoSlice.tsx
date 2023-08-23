import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(todo);
      console.warn('added');
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter(data => data.id !== action.payload);
      console.warn('Removed');
    },
  },
});

export const {addToDo, removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;
