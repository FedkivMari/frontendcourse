import React from "react"

class TodoContainer extends React.Component {
   constructor(props){
    super(props);
    this.state=
    { counter:0,}
   }
    addOne(){
        this.thatState({
            counter: this.state.counter+1;
        });
    }
  
    render() {
    return (
        <div>
            <h1 onClick={()=> this.addOne()}>Hello from Create React App</h1>
        </div>
    )
  }
}
export default TodoContainer