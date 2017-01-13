
import React from 'react';
import Parent from './Parent';
import child from './child';

class child extends Parent {
    constructor(props){
        super(props);
    }
    display(){
        go()

    }
}
 render (){
        return (
            <div className="Container">
              <h1>Container1</h1>
              <input  ref={(input) => { this.textInput = input; }} />
              <button className="btn btn-primary" onClick={this.go}>GO!</button>
               <child input = {this.state.input}> </child>
             </div>
        )
    }