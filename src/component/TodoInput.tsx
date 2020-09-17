import React from "react";
import styled from "styled-components";

import { State as TodoListState } from "./TodoList";

interface Props extends TodoListState {
  // 오버라이딩 개념!
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default class TodoInput extends React.Component<Props> {
  render() {
    const { inputText, onChange, onClick, onKeyPress } = this.props;
    return (
      <TodoInputDiv>
        <TodoTextInput
          value={inputText} // change 되면서 입력된 데이터를 value로
          placeholder="오늘 할 일을 작성해보세요."
          onChange={(e) => onChange(e)}
          onKeyPress={(e) => onKeyPress(e)}
        ></TodoTextInput>
        <CreateBtn onClick={onClick}>등록</CreateBtn>
        <TodoItemListDiv></TodoItemListDiv>
      </TodoInputDiv>
    );
  }
}

const TodoTextInput = styled.input`
  border: none;
  background: 0%;
  margin: 30px 20px 10px 20px;
  outline: none;
  font-size: 18px;
  width: 360px;
  border-bottom: 1px solid lightgrey;
  font-family: "Nanum Gothic", sans-serif;
  padding-bottom: 8px;
`;

const TodoInputDiv = styled.div`
  background-color: white;
`;

const TodoItemListDiv = styled.div``;

const CreateBtn = styled.button`
  /* width: 60px; */
  border: none;
  outline: none;
  font-size: 15px;
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
`;
