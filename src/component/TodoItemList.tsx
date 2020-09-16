import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

interface Props extends TodoList {
  inputText: string;
  updateText: string;
  todos: Array<{
    id: number;
    text: string;
    checked: boolean;
    updated: boolean;
  }>;
}

export default class TodoItemList extends React.Component<Props> {
  render() {
    // const todoItemList = this.props.todos.map(
    // ({})
    // )
    return <TodoItemListDiv>{/* { todoItemList } */}</TodoItemListDiv>;
  }
}

const TodoItemListDiv = styled.div``;
