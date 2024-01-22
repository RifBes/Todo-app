import React, { useContext } from 'react';
import './App.scss';
import { TodoContext, TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';
import Header from './components/Header/Header';

function App() {
    return (
        <TodoProvider>
            <div className="main">
                <Header />
                <div className="main-todos">
                    <AddTodo />
                    <Todos />
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
