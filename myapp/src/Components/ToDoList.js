import React, { useState } from 'react';

// CSS for styling
const styles = {
    container: {
        border: 'solid grey 3px',
        padding: '10px',
        borderRadius: '20px',
        margin: '20px',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
    },
};

const TodoList = () => {
    const [item1, setItem1] = useState('');
    const [itemArray1, setItemArray1] = useState([]);
    const [item2, setItem2] = useState('');
    const [itemArray2, setItemArray2] = useState([]);
    const [tempArr2, setTempArray2] = useState([]);
    const [checkState, setCheckState] = useState(false);

    const appendItem = () => {
        if (item1.trim() !== '') {
            setItemArray1([...itemArray1, item1]);
            setItem1('');
        }
        if (item2.trim() !== '') {
            setItemArray2([...itemArray2, item2]);
            setItem2('');
        }
    };

    const handleLeftTransfer = () => {
        if (itemArray2.length > 0) {
            setItemArray1([...itemArray1, itemArray2.pop()]);
        }
    };

    const handleRightTransfer = () => {
        if (itemArray1.length > 0)
            setItemArray2([...itemArray2, itemArray1.pop()]);
    };

    const handleInputChange = (e) => {
        if (!tempArr2.includes(e.target.value)) {
            setTempArray2([...tempArr2, e.target.value]);
            setCheckState(!checkState)
        }
        console.log(tempArr2);
    };

    return (
        <>
            <div style={styles.container}>
                <b>To-Do List 1</b>
                <input type="text" value={item1} placeholder="Enter Task" onChange={(e) => setItem1(e.target.value)} />
                <button onClick={appendItem}>Add Task</button>
                <ol>
                    {itemArray1.map((item, index) => (
                        <li key={index}>
                            <i>{item}</i>
                        </li>
                    ))}
                </ol>
            </div>

            <div style={styles.flexContainer}>
                <button onClick={handleRightTransfer}>
                    <b>---{">"}</b>
                </button>{" "}
                <button onClick={handleLeftTransfer}>
                    <b>{"<"}---</b>
                </button>
            </div>

            <div style={styles.container}>
                <b>To-Do List 2</b>
                <input type="text" value={item2} placeholder="Enter Task" onChange={(e) => setItem2(e.target.value)} />
                <button onClick={appendItem}>Add Task</button>
                <>
                    {itemArray2.map((item, index) => (
                        <>
                            <input
                                type="checkbox"
                                key={index}
                                value={item}
                                placeholder={item}
                                onChange={handleInputChange}
                                style={{ display: 'flex' }}
                            />
                            <i>{item}</i>
                        </>
                    ))}
                </>
            </div>
        </>
    );
};
export default TodoList;


// const [todos, setTodos] = useState(() => {
//     const storedTodos = localStorage.getItem('todos');
//     return storedTodos ? JSON.parse(storedTodos) : [];
// });

// const [newTodoText, setNewTodoText] = useState('');

// const handleTodoClick = (id) => {
//     setTodos(todos => todos.filter(todo => todo.id !== id));
// }

// const handleNewTodoChange = (event) => {
//     setNewTodoText(event.target.value);
// }

// const handleNewTodoSubmit = (event) => {
//     event.preventDefault();
//     if (newTodoText.trim()) {
//         const newTodo = { id: Date.now(), text: newTodoText };
//         setTodos(todos => [...todos, newTodo]);
//         setNewTodoText('');
//     }
// }

// useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
// }, [todos]);
// const TodoList = ({ todos, onTodoClick }) => {
//     return (
//         <ul>
//             {todos.map(todo => (
//                 <li key={todo.id} onClick={() => onTodoClick(todo.id)}>
//                     {todo.text}
//                 </li>
//             ))}
//         </ul>
//     );
// };
// return (
//     <div>
//         <h1>Todo List</h1>
//         <TodoList todos={todos} onTodoClick={handleTodoClick} />
//         <form onSubmit={handleNewTodoSubmit}>
//             <input type="text" value={newTodoText} onChange={handleNewTodoChange} />
//             <button type="submit">Add Todo</button>
//         </form>
//     </div>
// );
// };