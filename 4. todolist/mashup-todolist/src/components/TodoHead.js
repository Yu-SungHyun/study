import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoProvider';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
      margin: 0;
      font-size: 36px;
      color: #343a40;
    }
    .day {
      margin-top: 4px;
      color: #868e96;
      font-size: 21px;
    }
    .tasks-left {
      color: #20c997;
      font-size: 18px;
      margin-top: 40px;
      font-weight: bold;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    // 시간 함수
    const today = new Date();

    // 현 시간에서 날짜값 포맷팅 설정 후 저장
    const dateString = today.toLocaleDateString('ko-KR', {
       year: 'numeric', // 20.., 2022
       month: 'long',  // 1월, 2월
       day: 'numeric' // 숫자 값
    });

    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});
    
    // let total = 0;
    // todos.map(todo => todo.done == false ? total++ : todo);

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;