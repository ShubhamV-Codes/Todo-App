import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css";

export default function Todo() {

    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        })
        setNewTodo("");
    };
    let updateTodoValues = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) =>
                todo.id !== id
            )
        );

    }
    // let upperCaseAll = () => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) => {
    //             return {
    //                 ...todo, task:todo.task.toUpperCase(),
    //             };
    //         })
    //     );
    // };

    //     let lowerCaseAll = () => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) => {
    //             return {
    //                 ...todo, task:todo.task.toLowerCase(),
    //             };
    //         })
    //     );
    // };
    // let upperCaseOne = (id) => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo, task: todo.task.toUpperCase()
    //                 };
    //             }
    //             else{
    //                 return todo;
    //             }
    //         }))
    // }
    // let lowerCaseOne = (id) => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo, task: todo.task.toLowerCase()
    //                 };
    //             }
    //             else{
    //                 return todo;
    //             }
    //         }))
    // }
    let markAsDoneAll= () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo, isDone:true,
                };
            })
        );
    };
     let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo, isDone:true
                    };
                }
                else{
                    return todo;
                }
            }))
    }

      let markAsUnDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo, isDone:false
                    };
                }
                else{
                    return todo;
                }
            }))
    }



    return (
        <div>
            <h2  id="heading1">ToDo-List</h2>
            <input placeholder="Enter Task" value={newTodo} onChange={updateTodoValues} onKeyDown={(e) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  }} id="input" />
            &nbsp;
            <button onClick={addNewTask} id ="btn1"> Add Task </button>
            <br /><br /><br />
            <hr />
            <h4 id="heading">Added Tasks:</h4>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id} id="xyz">
                        <span style={todo.isDone ? {textDecorationLine : "line-through"} :{} }>{todo.task}</span>
                       
                        {/* &nbsp; &nbsp; &nbsp;
                    <button onClick={() => upperCaseOne(todo.id)}> U </button>
                          &nbsp; &nbsp; &nbsp;
                        <button onClick={() => lowerCaseOne(todo.id)}> L </button> */}
                          &nbsp; &nbsp; &nbsp;
                        <button onClick={() => markAsDone(todo.id)}id="m"> Mark as Done 
                            
                        </button>
                          &nbsp; &nbsp; &nbsp;
                        <button onClick={() => markAsUnDone(todo.id)}id="u" > UnMark </button>
                          &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)} id="x"> Delete </button>
                        </li>
                        
                })}
                

            </ul>
            <br/>
            {/* <button onClick={ upperCaseAll}> UpperCase All </button>
              &nbsp; &nbsp; &nbsp;
            <button onClick={ lowerCaseAll}> LowerCase All </button>
               &nbsp; &nbsp; &nbsp; */}
            {/* <button onClick={ markAsDoneAll}> Mark as Done All </button> */}


        </div>
    )
}