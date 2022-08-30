import React from "react"
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';

class TodoContainer extends React.Component {
   constructor(props){
    super(props);
    this.state=
    { counter:0,}
   }
    addOne(){
        this.setState({
            counter: this.state.counter+1,
        });
    }
  
    render() {
    return (
        <div>
            {/* <h1 onClick={()=>this.addOne()}>{this.state.counter}</h1> */}
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        </div>
    )
  }
}
export default TodoContainer;