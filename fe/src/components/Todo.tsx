import React from "react";

interface Text {
  text: string;
}

const Todo = ({ text }: Text) => {
  return <li>{text}</li>;
};

export default Todo;