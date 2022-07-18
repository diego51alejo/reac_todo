import React from 'react'
import './TodoItem.css'

function TodoItem(props){



    return (
        <li className={`tarea ${props.completed && 'tarea_true'}`}>
            <span 
                className={`checkbox ${props.completed && 'checkbox_true'}`} 
                onClick={props.onComplete}></span>
            <p>{props.text}</p>
            <span 
                className='mini_menu'
                onClick={props.onEdit}>
            </span>
        </li>
    );
}


export { TodoItem };