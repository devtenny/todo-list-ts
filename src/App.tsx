import React from 'react';
import './App.css';
import styled from 'styled-components';

import TodoList from './component/TodoList';

export default class App extends React.Component {
  render() {
    return (
      <TodoListZone>
        <Title>
          Typescript & React로
          <br />
          todo-list 만들기
        </Title>
        <TodoList />
      </TodoListZone>
    );
  }
}

const TodoListZone = styled.div`
  margin-top: 60px;
`;

const Title = styled.h2`
  text-align: center;
  font-family: 'Jua', san-serif;
  font-weight: 500;
`;
