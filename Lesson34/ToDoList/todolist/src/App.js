import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/Lists';


function App() {
  const [ todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className='wrap'>
        <header className='header__name'>ToDoList</header>
        <Form todos={todos} setTodos={setTodos}/>
        {/* <List  todos={this.state.todos} /> */}
        <List  />
      </div>
    </div>
  );
}

//-------- version from site----
// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//         <div className='wrap'>
//           <header className='header__name'>ToDoList</header>
//           <Form />
//           <List  todos={this.state.todos} />
//           {/* <List  /> */}
//         </div>
//       </div>
//     );
//   }
// } 

export default App;
