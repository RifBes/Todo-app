import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.scss';

export default function AddTodo() {
    const [todos, setTodos] = useContext(TodoContext);
    let [valueTitle, setValueTitle] = useState('');
    let [valueDescription, setValueDescription] = useState('');

    function addTask(e) {
        e.preventDefault();

        if (valueTitle === '' || valueTitle === undefined) {
            alert('Please, write something o(TヘTo)');
            return;
        }

        const newTodo = {
            //id: new Date().getTime(),
            id: uuidv4(),
            title: valueTitle,
            description: valueDescription,
            isDone: false,
            isEdit: false,
        };

        setTodos([newTodo, ...todos]);
        setValueTitle('');
        setValueDescription('');
    }

    return (
        <div className="addtodo">
            <h2 className="addtodo-title">Make a todo (´｡• ω •｡`) ♡</h2>
            <div className="addtodo-main">
                <form onSubmit={addTask} className="addtodo-form">
                    <div className="form-main">
                        <label htmlFor="title">Title</label>
                        <input
                            value={valueTitle}
                            onChange={(e) => setValueTitle(e.target.value)}
                            className="form-input"
                            type="text"
                            id="title"
                            placeholder="Write here!"
                        />
                        <label htmlFor="description">Description</label>
                        <textarea
                            value={valueDescription}
                            onChange={(e) =>
                                setValueDescription(e.target.value)
                            }
                            className="form-textarea"
                            id="description"
                            placeholder="Describe here!"
                        />
                    </div>
                    <button className="addtodo-button button">add task</button>
                </form>
                <p className="addtodo-text">
                    You can write whatever you want! (&nbsp;˙▿˙&nbsp;)
                </p>
            </div>
            <div className="line" aria-hidden="true"></div>
        </div>
    );
}
