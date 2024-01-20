import './Todo.scss';
import { IoIosClose } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

export default function Todo(props) {
    return (
        //<div className="todo-card" >
        <div
            className={`${props.isDone ? 'todo-card completed' : 'todo-card'}`}
        >
            <div className="todo-info">
                <p className="todo-title">{props.title}</p>
                <p className="todo-description">{props.describtion}</p>
            </div>
            <p
                className={`${
                    props.isDone ? 'completed-done' : 'completed-hide'
                }`}
            >
                Its done! o(≧▽≦)o
            </p>
            <div className="todo-icons">
                <IoIosClose
                    onClick={() => props.deleteTask(props.id)}
                    className="icon icon-close"
                    title="delete"
                />
                <MdDone
                    onClick={() => props.doneTask(props.id)}
                    className="icon icon-done"
                    title="done"
                />
                <AiFillEdit
                    className="icon icon-edit"
                    title="edit"
                    onClick={() => props.editTask(props.id)}
                />
            </div>
        </div>
    );
}
