import React, { useEffect } from "react";
import { useStore } from "./store";

export default function TodoList() {
  const [todoValue, setTodoValue] = React.useState();
  const { todos, addTodo, deleteTodo } = useStore((state) => state);




  const onSubmit = (e) => {
    // e.preventDefault();
    addTodo(todoValue);
    setTodoValue("");
  }

  return (
    <>
      {/* <form onSubmit={onSubmit}> */}
      <input type={"text"}
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)} />
      <button onClick={onSubmit}>Add</button>
      {/* </form> */}

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}