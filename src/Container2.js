import React from 'react';
 import './Container.css';
 import Container from './Container';

export default class Container2 extends React.Component {
    constructor(props){
         super(props);
    }
    
    render (){
          const str = `(${props.colors.userId}, ${props.colors.userName},{props.colors.a}})`;
        return (
            <div className="Container2" style={{str}}>
             {/* <h1>Container2</h1>
              <h2>{this.props.userId} {this.props.userName} {this.props.password}</h2>}*/}
            </div>
            
        )
    }
   
}