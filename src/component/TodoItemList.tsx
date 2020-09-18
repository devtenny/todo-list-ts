import React from 'react';
import styled from 'styled-components';

import { State as TodoListState } from './TodoList';

interface Props extends TodoListState {
  onClick: (id: number) => void;
  onToggle: (id: number) => void;
  onUpdate: (id: number) => void;
  onUpdateChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>, id: number) => void;
}

// 함수형 컴포넌트로 변경
export default function TodoItemList({
  todos,
  onClick,
  onToggle,
  onUpdate,
  onUpdateChange,
  onKeyPress,
}: Props) {
  const todoItemList = todos.map(({ id, text, checked, updated }) => (
    <TodoItemListDiv key={id}>
      <TodoItemDiv
        isChecked={checked} // checked가 true면 클래스명이 "checked", false면 ""
        onClick={() => onToggle(id)}
        onDoubleClick={() => onUpdate(id)}
      >
        {text}
        <DeleteBtn
          onClick={(e) => {
            e.stopPropagation(); // 부모의 이벤트 동작하지 않도록(이벤트 버블링 방지)
            onClick(id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </DeleteBtn>
      </TodoItemDiv>
      <UpdatedInput
        isUpdated={updated} // updated가 true면 클래스명이 "updated", false면 ""
        placeholder="수정할 내용을 작성하고 엔터를 누르세요."
        onChange={(e) => onUpdateChange(e, id)}
        onKeyUp={(e) => onKeyPress(e, id)}
      ></UpdatedInput>
    </TodoItemListDiv>
  ));
  return <TodoItemListDiv2>{todoItemList}</TodoItemListDiv2>;
}

// 클래스형 컴포넌트
// export default class TodoItemList extends React.Component<Props> {
//   render() {
//     const {
//       todos,
//       onClick,
//       onToggle,
//       onUpdate,
//       onUpdateChange,
//       onKeyPress,
//     } = this.props;
//     const todoItemList = todos.map(({ id, text, checked, updated }) => (
//       <TodoItemListDiv key={id}>
//         <TodoItemDiv
//           className={checked ? "checked" : ""}
//           onClick={() => onToggle(id)}
//           onDoubleClick={() => onUpdate(id)}
//         >
//           {text}
//           <DeleteBtn
//             onClick={(e) => {
//               e.stopPropagation(); // 부모의 이벤트 동작하지 않도록
//               onClick(id);
//             }}
//           >
//             <i className="fas fa-trash-alt"></i>
//           </DeleteBtn>
//         </TodoItemDiv>
//         <UpdatedInput
//           className={updated ? "updated" : ""}
//           placeholder="수정할 내용을 작성하고 엔터를 누르세요."
//           onChange={(e) => onUpdateChange(e, id)}
//           onKeyUp={(e) => onKeyPress(e, id)}
//         ></UpdatedInput>
//       </TodoItemListDiv>
//     ));
//     return <TodoItemListDiv2>{todoItemList}</TodoItemListDiv2>;
//   }
// }

const TodoItemListDiv = styled.div`
  padding: 10px;
  &:hover {
    background-color: lightgray;
  }
`;
const TodoItemListDiv2 = styled.div`
  padding: 10px;
  cursor: pointer;
`;
const TodoItemDiv = styled.div<{ isChecked: boolean }>`
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`;
const DeleteBtn = styled.span`
  margin-left: 5px;
  float: right;
  color: white;
`;
const UpdatedInput = styled.input<{ isUpdated: boolean }>`
  display: ${(props) => (props.isUpdated ? 'inline' : 'none')};
  border: none;
  outline: none;
  width: 300px;
  font-family: 'Nanum Gothic', sans-serif;
`;
