import React from 'react';
import styled from 'styled-components';

import TodoInput from './TodoInput';
import TodoItemList from './TodoItemList';

// 공통적으로 사용되는(고정된) 타입 지정은 따로 해주는 것이 좋음
// 이런 경우가 많을 때는 아예 다른 파일로 분리시켜서 export-iport해서 사용하는 것이 좋음
interface Todo {
  id: number;
  text: string;
  checked: boolean;
  updated: boolean;
}

// state와 props는 interface(or type)으로 처리
// 한 파일에서 사용할 state에 대한 타입 지정은 같은 파일 내에서 이루어지는 것이 좋음
export interface State {
  // 다른 파일에서 import해서 사용하고 싶을 경우 반드시 export 시켜줄 것
  inputText?: string;
  updateText?: string;
  todos: Todo[]; // 따로 배열 요소들의 타입을 지정해주고 가져와서 사용하는 것이 best
  // 아래와 같이 타입을 선언해줘도 가능하나 best는 아님
  // todos: Array<{
  //   id: number;
  //   text: string;
  //   checked: boolean;
  //   updated: boolean;
  // }>;
}

export default class TodoList extends React.Component<{}, State> {
  id: number = 4;
  state = {
    inputText: '',
    updateText: '',
    todos: [
      {
        id: 0,
        text: '할 일을 작성한 후 엔터를 누르거나 등록 버튼을 누르세요.',
        checked: false,
        updated: false,
      },
      {
        id: 1,
        text: '완료한 항목은 한번 클릭하세요.',
        checked: true,
        updated: false,
      },
      {
        id: 2,
        text: '수정하려면 두번 클릭하세요.',
        checked: false,
        updated: true,
      },
      {
        id: 3,
        text: '삭제하려면 우측 삭제 버튼을 눌러주세요.',
        checked: false,
        updated: false,
      },
    ],
  };
  // 할 일 추가 Change, Click, KeyPress
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 타입스크립트를 사용할 경우 이벤트에 대한 타입 지정도 필요함
    this.setState({
      inputText: e.target.value,
    });
  };
  handleClick = () => {
    const { inputText, todos } = this.state;
    if (inputText !== '') {
      this.setState({
        inputText: '',
        todos: todos.concat({
          id: this.id++,
          text: inputText,
          checked: false,
          updated: false,
        }),
        updateText: inputText,
      });
    }
  };
  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  // 할 일 완료/미완료 표시
  handleToggle = (id: number) => {
    const { todos } = this.state;
    for (const todo of todos) {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
    }
    this.setState({
      todos: todos,
    });
  };

  // 할 일 삭제
  handleRemove = (id: number) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((newTodos) => newTodos.id !== id),
    });
  };

  // 할 일 수정
  handleUpdate = (id: number) => {
    const { todos } = this.state;
    let text: string = '';
    for (const todo of todos) {
      if (todo.id === id) {
        todo.updated = !todo.updated;
        text = todo.text;
      }
    }
    this.setState({
      todos: todos,
      updateText: text,
    });
  };
  handleUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      updateText: e.target.value,
    });
  };
  handleUpdateKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.key === 'Enter') {
      this.handleUpdateDone(id);
    } else if (e.keyCode === 27) {
      const { todos } = this.state;
      for (const todo of todos) {
        if (todo.id === id) {
          todo.updated = !todo.updated;
        }
      }
      this.setState({
        todos: todos,
        updateText: '',
      });
    }
  };
  handleUpdateDone = (id: number) => {
    const { todos, updateText } = this.state;
    for (const todo of todos) {
      if (todo.id === id) {
        todo.updated = !todo.updated;
        todo.text = updateText;
      }
    }
    this.setState({
      todos: todos,
      updateText: '',
    });
  };

  render() {
    const { inputText, updateText, todos } = this.state;
    return (
      <Container>
        <Background>
          <Title>오늘 할 일</Title>
          <Content>
            <TodoInput
              todos={todos}
              inputText={inputText}
              onChange={this.handleChange}
              onClick={this.handleClick}
              onKeyPress={this.handleKeyPress}
            />
            <TodoItemList
              inputText={inputText}
              updateText={updateText}
              todos={todos}
              onClick={this.handleRemove}
              onToggle={this.handleToggle}
              onUpdate={this.handleUpdate}
              onUpdateChange={this.handleUpdateChange}
              onKeyPress={this.handleUpdateKeyPress}
            />
          </Content>
        </Background>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
  height: 770px;
  margin: 20px auto 72px auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  background-color: #f0e5de;
`;

const Background = styled.div`
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  margin: 20px;
  height: 710px;
  border-radius: 20px;
`;

const Title = styled.h1`
  margin: 0px 0px -20px 0px;
  padding: 20px;
  background-color: #abd0ce;
  border-radius: 20px 20px 0 0;
  color: white;
  height: 50px;
  font-family: 'Jua', san-serif;
  font-weight: 500;
`;

const Content = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  background-color: white;
  height: 640px;
  border-radius: 0 0 20px 20px;
`;
