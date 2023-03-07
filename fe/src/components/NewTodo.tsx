import React, { useRef } from "react";

interface NewTodoProps {
    onAddTodo: (text: string) => void;
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const NewTodo = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onHandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let enteredValue = textInputRef.current!.value;
    props.onAddTodo(enteredValue);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="todo-text">Todo text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodo;