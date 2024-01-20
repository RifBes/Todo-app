import React from 'react';
import './App.scss';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';

function App() {
    return (
        <TodoProvider>
            <div className="main">
                <h1 className="main-title">To do ♡</h1>
                <div className="main-todos">
                    <AddTodo />
                    <Todos />
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
