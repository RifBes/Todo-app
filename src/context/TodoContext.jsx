//для тудушек

import { createContext, useState } from 'react';

//позволяет создать контекст, который компоненты могут предоставить или прочитать.
export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const getTodos = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(getTodos ? getTodos : []);

    return (
        //Provider - позволяет предоставлять значение контекста компонентам.
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
};
