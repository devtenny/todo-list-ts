import React from 'react';
import './App.css';
import styled from "styled-components";

import TodoList from './component/TodoList';

export default class App extends React.Component {
  render() {
    return(
      <TodoListZone>
        <h1>Typescript로 todo-list 만들기</h1>
        <TodoList/>
      </TodoListZone>
    )
  }
}

const TodoListZone = styled.div`
  margin-top: 60px;
  text-align: center;
`;
