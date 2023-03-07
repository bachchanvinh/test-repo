import React from "react";
import Todo from "./Todo";

interface TodoListProps {
  todoList: {
    id: string;
    text: string;
  }[];
}

const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;