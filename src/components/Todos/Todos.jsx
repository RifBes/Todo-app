import { useContext, useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.scss';
import { TodoContext } from '../../context/TodoContext';

export default function Todos() {
    const [todos, setTodos] = useContext(TodoContext);
    const [edit, setEdit] = useState(false);
    const [filtered, setFiltered] = useState(todos);
    const [activeButton, setActiveButton] = useState('all');

    useEffect(() => {
        setFiltered(todos);
    }, [todos]);

    function deleteTask(id) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    function doneTask(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    }

    function updateTask(id, newTitle, newDescription) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          title: newTitle,
                          description: newDescription,
                      }
                    : todo
            )
        );
        setEdit(null);
    }

    function filterTodo(filter) {
        if (filter === 'all') {
            setFiltered(todos);
        } else {
            let newTodo = [...todos].filter((todo) => todo.isDone === filter);
            setFiltered(newTodo);
        }
        setActiveButton(filter);
    }

    return (
        <div className="todos">
            <div className="todos-buttons">
                <button
                    onClick={(e) => {
                        filterTodo('all');
                    }}
                    className={`todos-button button ${
                        activeButton === 'all' ? 'button-active' : ''
                    }`}
                >
                    all
                </button>
                <button
                    onClick={(e) => {
                        filterTodo(false);
                    }}
                    className={`todos-button button ${
                        activeButton === false ? 'button-active' : ''
                    }`}
                >
                    todo
                </button>
                <button
                    onClick={(e) => {
                        filterTodo(true);
                    }}
                    className={`todos-button button ${
                        activeButton === true ? 'button-active' : ''
                    }`}
                >
                    Completed
                </button>
            </div>
            <div className="todos-cards">
                {1 <= todos.length ? (
                    filtered.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            isDone={todo.isDone}
                            isEdit={todo.isEdit}
                            deleteTask={deleteTask}
                            doneTask={doneTask}
                            updateTask={updateTask}
                            edit={edit}
                            setEdit={setEdit}
                        />
                    ))
                ) : (
                    <p>No todo found... (╯︵╰,)</p>
                )}
            </div>
        </div>
    );
}
