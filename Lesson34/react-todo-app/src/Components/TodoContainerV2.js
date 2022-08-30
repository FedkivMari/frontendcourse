import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import { formHelperTextClasses } from '@mui/material';

const TodoContainerV2 =()=>{
    // const [counter, setCounter] = useState(0);
    // const addOne=()=>{
    //    setCounter(counter+1);
    // }
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const addTodo=()=>{
        setTodos([...todos, {value:'tests'}]);
     }
    
    return(
        <div style={{display:'flex', alignItems:'center'}}>
            {/* <h1 onClick={()=> addOne() }>{counter}</h1> */}
            <TextField 
            onChange={(event)=>setTodo(event.target.value)}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"/>
            <Icon 
                style={{cursor:'pointer'}}
                color="primary"
                onClick={()=> addTodo()}>
            add_circle</Icon>
        </div>
    )
}

export default TodoContainerV2;