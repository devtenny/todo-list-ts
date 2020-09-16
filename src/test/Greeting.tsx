import React from 'react';

// props의 타입 선언 시, interface or type 사용
type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;  // 아무것도 리턴하지 않음
};

// const Greetings = ({ name, mark, optional }: GreetingsProps) => (
// 함수형 컴포넌트 작성 시, 화살표 함수에서 다시 function 쓰기를 권장하는 추세
function Greetings({ name, mark, optional, onClick }: GreetingsProps) {  
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, { name } { mark }
            { optional && <p>{ optional }</p>}
            <div>
                <button onClick={ handleClick }>Click me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;