import React from "react";
import styled from "styled-components";

export default class TodoInput extends React.Component {
  render() {
    return (
      <TodoInputDiv>
        <TodoTextInput placeholder="오늘 할 일을 작성한 후 엔터를 누르세요."></TodoTextInput>
        <TodoItemListDiv></TodoItemListDiv>
      </TodoInputDiv>
    );
  }
}

const TodoTextInput = styled.input`
  border: none;
  background: 0%;
  padding: 10px;
  outline: none;
  font-size: 18px;
  width: 80%;
`;

const TodoInputDiv = styled.div`
  background-color: white;
`;

const TodoItemListDiv = styled.div``;
