import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { TodoListProps } from "./todo.model";
import "./index.css";

const TodoApp = () => {

  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  const todoAddHandle = (text: string) => {
    console.log(text);
    setTodoList((prevProps) => [
      ...prevProps,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <NewTodo todo={todo} setTodo={setTodo} onAddTodo={todoAddHandle} />
      <TodoList todoList={todoList} />
    </>
  );
};

export default TodoApp;