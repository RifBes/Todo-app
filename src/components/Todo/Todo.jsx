import './Todo.scss';
import { IoIosClose } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export default function Todo(props) {
    const [todos, setTodos] = useContext(TodoContext);

    return (
        <div className="todo-card">
            <IoIosClose className="icon icon-close" title="delete" />
            <div className="todo-info">
                <p className="todo-title">{props.title}</p>
                <p className="todo-description">{props.describtion}</p>
            </div>
            <div className="todo-icons">
                <MdDone className="icon icon-done" title="done" />
                <AiFillEdit className="icon icon-edit" title="edit" />
            </div>
        </div>
    );
}
