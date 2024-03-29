import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';

const TodoList = ({todo, index, handleToggle, delTodo}) =>{
    return(
        <ListItem
        key={index}
        role="listitem"
        button
        >
            <ListItemIcon>
            <Checkbox
            checked={todo.checked}
            tabIndex={-1}
            disableRipple
            onClick={() => handleToggle(index)}
            />
            </ListItemIcon>
            <ListItemText primary={todo.value} />
            <Icon 
                style={{cursor:'pointer'}}
                color="primary"
                onClick={()=> delTodo(index)}>
            delete</Icon>
        </ListItem>
    )
}
export default TodoList;