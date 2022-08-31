import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import TodoList from './TodoList';

// import { formHelperTextClasses } from '@mui/material';

const TodoContainerV2 =()=>{
    // const [counter, setCounter] = useState(0);
    // const addOne=()=>{
    //    setCounter(counter+1);
    // }
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    
    const addTodo=()=>{
        setTodos([...todos, {value:todo, checked:false}]);
        setTodo('');
     }
    const handleToggle = (index) =>{
        let temp = todos;
        temp[index].checked = !temp[index].checked;
        setTodos([...temp]);
    }
    const delTodo = (index) =>{
        let temp = todos;
        temp.splice(index, 1);
        setTodos([...temp]);
    }
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            {/* <h1 onClick={()=> addOne() }>{counter}</h1> */}
            <div style={{display:'flex', alignItems:'center'}}>
                <TextField 
                onChange={(event)=>setTodo(event.target.value)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={todo}/>
                <Icon 
                    style={{cursor:'pointer'}}
                    color="primary"
                    onClick={()=> addTodo()}>
                add_circle</Icon>
            </div>
            <List dense component="div" role="list" className="lists">
                {todos.map((tempTodo, index)=>{
                    return(
                        <TodoList index={index} todo={tempTodo} handleToggle={handleToggle} delTodo={delTodo}/>
                    // <h1 key={index}>{tempTodo.value}</h1>
                    )
                })}
            </List>    
        </div>
    )
}

export default TodoContainerV2;