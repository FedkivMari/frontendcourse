import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoContainerV2 from './Components/TodoContainerV2';
import TodoContainer from './Components/TodoContainer';


function App() {
    return (
        <div className="App">
           
            <header className='header__name'>
              <TodoContainer />
              < TodoContainerV2/>
            </header>
        
      </div>
    </div>
  );
}