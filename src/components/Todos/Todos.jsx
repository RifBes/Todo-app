import { useContext } from 'react';
import Todo from '../Todo/Todo';
import './Todos.scss';
import { TodoContext } from '../../context/TodoContext';

export default function Todos() {
    const [todos, setTodos] = useContext(TodoContext);

    function deleteTask(id) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    function editTask(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
            )
        );
    }

    function doneTask(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    }

    return (
        <div className="todos">
            <div className="todos-buttons">
                <button className="todos-button button">todo</button>
                <button className="todos-button button">Completed</button>
            </div>
            <div className="todos-cards">
                {1 <= todos.length ? (
                    todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            describtion={todo.describtion}
                            isDone={todo.isDone}
                            isEdit={todo.isEdit}
                            deleteTask={deleteTask}
                            editTask={editTask}
                            doneTask={doneTask}
                        />
                    ))
                ) : (
                    <p>No todo found... (╯︵╰,)</p>
                )}
            </div>
        </div>
    );
}
