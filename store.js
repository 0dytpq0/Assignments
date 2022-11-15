import create from 'zustand';
import { uid } from 'react-uid';
import { persist, redux } from 'zustand/middleware';



export const useStore = create(persist((set) => ({
  todos: [],
  addTodo: (todoText) => set((state) => ({
    todos: [
      ...state.todos,
      {
        text: todoText,
        id: uid(`${todoText}-${state.todos.length}`),
      }
    ]
  })),
  deleteTodo: (todoId) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== todoId)
  })),


})));