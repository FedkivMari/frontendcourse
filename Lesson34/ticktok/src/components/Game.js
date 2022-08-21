import React from 'react';
import './Box.css';

class Game extends React.Component{
    theyClickMe(x, y) {
        console.log(x, y);
    }
    render(){
        return(
           <div>
               {[0,1,3].map (x => {
                    return(
                        <div className='row'>
                            {[0,1,3].map (y => {
                                return(
                                    <div className='box' onClick={()=> this.theyClickMe(x,y)} key={`${x}${y}`}>
                                         test
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
           </div>
        )
    }
}

export default Game;