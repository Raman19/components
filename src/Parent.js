import React from 'react';
 import './Container.css';
 import Container2 from './Container2';

 class Parent extends React.Component {
    constructor(props){
         super(props);
         this.state = { count : "raman&dikshita"};
         this.go = this.go.bind(this);

    }
    go() {
          const input = this.textInput.value;
          this.setState({input});
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