import React from 'react';
import TodoContainer from './Components/TodoContainer';
import './App.css';
// import Form from './Components/Form';
import TodoContainerV2 from './Components/TodoContainerV2';
// import TodoContainer from './Components/TodoContainer';


function App() {
    return (
        <div className="App">
            <header className='header__name'>
            <TodoContainerV2/>
            <TodoContainer/>
            </header>
        </div>
    );
}
export default App;