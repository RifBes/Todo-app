import { useContext, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.scss';
import { TodoContext } from '../../context/TodoContext';

export default function Todos() {
    const [todos, setTodos] = useContext(TodoContext);
    const [edit, setEdit] = useState(false);

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

    return (
        <div className="todos">
            <div className="todos-buttons">
                <button className="todos-button button">all</button>
                <button className="todos-button button">todo</button>
                <button className="todos-button button">Completed</button>
            </div>
            <div className="todos-cards">
                {1 <= todos.length ? (
                    todos
                        .reverse()
                        .map((todo) => (
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
