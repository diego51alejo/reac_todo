import React from 'react'
import './ToList.css'

function TodoList(props){
    return (
        <section className='menu_tareas'>
            <ul className='tareas'>
                {props.children}
            </ul>
        </section>
    );
}


export { TodoList };