import { IonButton, IonInput } from '@ionic/react';
import React, { FormEvent, useState } from 'react';
import { useTodos } from '../store/TodoStore';
import './AddTodo.css' // Import the CSS file

export default function AddTodo() {
    const [todo, setTodo] = useState("");
    const { handleAddTodo } = useTodos();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTodo(value);
    };
    
    return (
        <form onSubmit={handleFormSubmit} className="todo-form">
            <IonInput 
                type='text' 
                value={todo} 
                onIonChange={handleInputChange} 
                placeholder='Add Todos Here...' 
                className="todo-input" 
            />
            <IonButton 
                type='submit' 
                color='primary' 
                className="add-button" 
            >
                Add
            </IonButton>
        </form>
    );
}
