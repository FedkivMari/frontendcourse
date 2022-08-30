import React from "react"
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';

class TodoContainer extends React.Component {
   constructor(props){
    super(props);
    this.state=
    { 
       task:"",
       todos:[],
    };
    this.addTodos=this.addTodos.bind(this);
    this.addTodo=this.addTodo.bind(this);
   }
       
    addTodo(value){
        this.setState({
            task: value,
        })
    }
    addTodos(task){
        this.setState({
            todos:[...this.state.todos, this.state.task]
        })
    }
    
    render() {
    return (
        <div>
            <TextField  
                onChange={(event)=>this.addTodo(event.target.value)}
                id="outlined-basic"
                label="Outlined" 
                variant="outlined"/>
            <Icon style={{cursor:'pointer'}} 
                color="primary"
                onClick={()=> this.addTodos()}
                >
                add_circle</Icon> 
            <ul>
                {this.state.todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>     
            
            {/* <h1>
            {this.state.todo.map(todo => (
                        <li>{todo.title}</li>
                    ))}
            </h1> */}
        </div>
         
    )
  }
}
export default TodoContainer;