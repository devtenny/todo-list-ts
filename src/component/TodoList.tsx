import React from "react";
import styled from "styled-components";

import TodoInput from "./TodoInput";
import TodoItemList from "./TodoItemList";

// state와 props는 interface(or type)으로 처리
interface State {
  inputText: string;
  updateText: string;
  todos: Array<{
    id: number;
    text: string;
    checked: boolean;
    updated: boolean;
  }>;
}

export default class TodoList extends React.Component<{}, State> {
  id: number = 4;
  state = {
    inputText: "",
    updateText: "",
    todos: [
      { id: 0, text: "첫번째", checked: false, updated: false },
      { id: 1, text: "두번째", checked: false, updated: false },
      { id: 2, text: "세번째", checked: false, updated: false },
      { id: 3, text: "네번째", checked: false, updated: false },
    ],
  };

  render() {
    return (
      <TodoListDiv>
        <TodoTitleH1>Todo-List</TodoTitleH1>
        <TodoInput />
        {/* <TodoItemList 
        todos={this.todos}/> */}
      </TodoListDiv>
    );
  }
}

const TodoListDiv = styled.div`
  width: 440px;
  height: 770px;
  margin: 20px auto 72px auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  background-color: #f0e5de;
`;

const TodoTitleH1 = styled.h1`
  margin: 20px;
  padding: 20px;
  background-color: #abd0ce;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0 0;
  color: white;
`;
