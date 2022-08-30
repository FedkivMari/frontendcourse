import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
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
     }
    const handleToggle = (index) =>{
        let temp = todos;
        temp[index].checked = !temp[index].checked;
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
                variant="outlined"/>
                <Icon 
                    style={{cursor:'pointer'}}
                    color="primary"
                    onClick={()=> addTodo()}>
                add_circle</Icon>
            </div>
            <List dense component="div" role="list" className="lists">
                {todos.map((tempTodo, index)=>{
                    return(
                        <ListItem
                        key={index}
                        role="listitem"
                        button
                        onClick={handleToggle(index)}
                        >
                            <ListItemIcon>
                            <Checkbox
                            checked={todo.checked}
                            tabIndex={-1}
                            disableRipple
                            />
                            </ListItemIcon>
                            <ListItemText primary={tempTodo.value} />
                        </ListItem>
                    // <h1 key={index}>{tempTodo.value}</h1>
                    )
                })}
            </List>    
        </div>
    )
}

export default TodoContainerV2;