import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  completed: boolean;
  name: string;
  id: number;
}

export interface TodoSliceState {
  todoList: Todo[];
}

const initialState: TodoSliceState = {
  todoList: [
    {
      id: 0,
      completed: false,
      name: "Drink",
    },
    {
      id: 1,
      completed: false,
      name: "Fly",
    },
    {
      id: 2,
      completed: false,
      name: "Read",
    },
    {
      id: 3,
      completed: true,
      name: "Walk",
    },
  ],
};

export const todoSlice = createAppSlice({
  name: "todos",
  initialState,
  reducers: (create) => ({
    add: create.reducer((state, action) => {
      // state.todoList.push(action);
    }),
    remove: create.reducer((state, action: PayloadAction<number>) => {
      console.log(action);
      state.todoList.
      return;
    }),
    edit: create.reducer((state, action: PayloadAction<{ name: string }>) => {
      console.log(action);
      // const todo = state.todoList.find(
      //   (todo: Todo) => todo.name === action.payload
      // );
      // todo.completed = !todo.completed;
    }),
  }),
  selectors: {
    selectTodos: (state) => state.todoList,
  },
});

export const { add, remove, edit } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;
