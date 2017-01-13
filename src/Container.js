 import React from 'react';
 import './Container.css';
 import Container2 from './Container2';

export default class Container extends React.Component {
    constructor(props){
         super(props);
         this.state = { count : "raman&dikshita"};
         this.go = this.go.bind(this);

    }
    go() {
          const userId = this.textInput1.value;
          const userName = this.textInput2.value;
          const password = this.textInput3.value;
          this.setState({userId : userId},{userName : userName},{password: password});
          return{userId,userName,password}
    }

    render (){
        return (
            <div className="Container">
              <span className="Clone">
              <h1>Container1</h1>
              <label>UserId     :  </label> <input  ref={(userId) => { this.textInput1=userId; }} /><br/><br/>
              <label>UserName   :</label><input  ref={(password) => { this.textInput2=password; }}/><br/><br/>
              <label>Password   : </label> <input  ref={(UserName) => { this.textInput3=UserName; }} type="password" /><br/><br/>
              <button className="btn btn-primary" onClick={this.go}>GO!</button>
              </span>
              <span>
               {
                 Array(3).fill(null).map((_, i) =>{
                  return <Container2 key={i} colors={this.go()} />;
                  })
               }
             {/* <Container2 userId={this.go()}> </Container2>*/}
    
               </span>
             </div>
        )
    }
   
}