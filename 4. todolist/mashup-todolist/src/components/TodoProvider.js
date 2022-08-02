import React, {useReducer, createContext, useContext, useRef} from "react";

const initialTodos = [
    {
        id : 1,
        text: "프로젝트",
        done: false
    },
    {
        id: 2,
        text: "컴포넌트",
        done: true
    },
    {
        id: 3,
        text: "Context",
        done: false
    },
    {
        id: 4,
        text: '기능',
        done: true
    }
];

function todoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map( todo =>
                todo.id == action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id != action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


// state와 dispatch 를 분리해서 각자 필요한 곳에서 사용할 수 있도록 한다.
// 함수형
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// {children}을 사용하면 TodoProvider 가 감싸는 자식 컴포넌트에게 상태와 디스패처를 전달할 수 있다. 
export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
  
    return (
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
          </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    );
  }
  

export function useTodoState(){
    const context =  useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext); 
    if(!context){
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}