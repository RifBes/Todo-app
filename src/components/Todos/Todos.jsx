import { useContext } from 'react';
import Todo from '../Todo/Todo';
import './Todos.scss';
import { TodoContext } from '../../context/TodoContext';

export default function Todos() {
    const [todos, setTodos] = useContext(TodoContext);

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
                            completed={todo.isDone}
                        />
                    ))
                ) : (
                    <p>No todo found... (╯︵╰,)</p>
                )}
            </div>
        </div>
    );
}
