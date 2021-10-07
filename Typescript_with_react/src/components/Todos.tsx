import React from 'react';
import Todo from '../modals/todo';
import TodoItem from './TodoItem';

const Todos : React.FC<{items:Todo[]}> = (props) => {
    return <ul>
        {props.items.map((item)=>(
            <TodoItem text={item.text}/>
        ))}
    </ul>
}

export default Todos;