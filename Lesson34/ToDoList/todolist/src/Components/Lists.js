import React from 'react';

class List extends React.Component{
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
    render(){
        return(
            <div className="list__items">
                <div className='list__item'>
                    <ul className='item__text'>
                        {this.state.todos.map(todo => (
                            <li>{todo.title}</li>
                        ))}
                    </ul>
                    <button className="button" type='submit'>
                        <span className="material-symbols-outlined">
                            done
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}
export default List;