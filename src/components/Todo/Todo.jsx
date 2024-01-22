import './Todo.scss';
import { IoIosClose } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { useState } from 'react';

export default function Todo(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function editTask(id, title, description) {
        props.setEdit(id);
        setTitle(title);
        setDescription(description);
    }

    return (
        <div
            className={`${props.isDone ? 'todo-card completed' : 'todo-card'}`}
        >
            <div className="todo-info">
                {props.edit === props.id ? (
                    <div className="todo-edit">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button
                            onClick={() =>
                                props.updateTask(props.id, title, description)
                            }
                            className="button"
                        >
                            update
                        </button>
                    </div>
                ) : (
                    <>
                        <p className="todo-title">{props.title}</p>
                        <p className="todo-description">{props.description}</p>
                    </>
                )}
            </div>

            {props.isDone && (
                <p className="completed-done">Its done! o(≧▽≦)o</p>
            )}

            {!props.edit && (
                <div className="todo-icons">
                    <IoIosClose
                        onClick={() => props.deleteTask(props.id)}
                        className="icon icon-close"
                        title="delete"
                    />
                    {!props.isDone && (
                        <>
                            <MdDone
                                onClick={() => props.doneTask(props.id)}
                                className="icon icon-done"
                                title="done"
                            />
                            <AiFillEdit
                                className="icon icon-edit"
                                title="edit"
                                onClick={() =>
                                    editTask(
                                        props.id,
                                        props.title,
                                        props.description
                                    )
                                }
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
