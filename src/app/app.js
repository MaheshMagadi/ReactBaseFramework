import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, hashHistory, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


class App extends Component {
    constructor(){
        super();
         /**
          * @type {object}
          * @property {string} title search artist
          */
        this.state={
          title:"welcome"
        }
      }
      /**
          * handle submit form event
          * @param {String} title
          */
      changeTitle(title){
        this.setState({title});
     
      }
        /**
          * render
          * @return {ReactElement} markup
          */
       render(){
       
         return(
           <div>
      
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
     
      
     
     </div>
          )
       }
}

export default App;
