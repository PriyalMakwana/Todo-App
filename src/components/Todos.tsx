import React from 'react';
import { useTodos } from '../store/TodoStore';
import { IonButton } from '@ionic/react';
import './Todos.css'; // Import your CSS file

export default function Todos() {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

    let filterData = todos;
    return (
        <div className="todos-container"> {/* Wrapping todos in a container */}
            <ul className="todos-list">
                {
                    filterData.map((todo) => {
                        return (
                            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}> {/* Applying CSS class based on completion status */}
                                <div className="todo-details">
                                    <input type='checkbox' id={`todo-${todo.id}`}
                                        checked={todo.completed}
                                        onChange={() => toggleTodoAsCompleted(todo.id)} />
                                    <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                                </div>

                                {
                                    todo.completed && (
                                        <IonButton color={'danger'} className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>Delete</IonButton>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
