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
       
    // addTodo(value){
    //     this.setState({
    //         task: value,
    // })
    addTodo(event){
        this.setState({
            task: event.target.value,
        })
    }
    addTodos(task){
        this.setState({
            todos:[...this.state.todos, this.state.task],
            task:"",
        })
    }
    
    render() {
    return (
        <div>
            <TextField  
                // onChange={(event)=>this.addTodo(event.target.value)}
                onChange={this.addTodo}
                id="outlined-basic"
                label="Outlined" 
                variant="outlined"
                // value={this.task}     It's not work. Why? I want to clear text field after adding the task
                />
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
        </div>
    )
  }
}
export default TodoContainer;