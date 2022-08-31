import React from 'react';

// const Form = () =>{
//      return (

//      );   
// }

class Form extends React.Component{
    submitTodoItem(e){
       console.log('Ytt');
       e.preventDefault();
    };

    render(){
        return(
            <form> 
                <input type="text" className="todo_input" id='form'/>
                <button onClick={()=> this.submitTodoItem()} className="form_button button" type='submit'>
                    <span className="material-symbols-outlined">
                        done
                    </span>
                </button>
            </form>
        );
    }
}
export default Form;