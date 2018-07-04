import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import {render} from  'react-dom';
import React from 'react';

/**
 * Action that received tracks by country
 */
export const RECEIVE_TRACKS_BY_COUNTRY = 'RECEIVE_TRACKS_BY_COUNTRY';
/**
 * url variable
 */

export const urlRoot = 'http://ws.audioscrobbler.com/2.0/?api_key=b867bf0fdfe95e6c6dc31a275535f765&format=json&';
/**
 * input form commponent for artist name
 */

export default class Header extends React.Component{
   /**
     * handle submit form event
     * @param {String} e fdsfsdfdsfdsafds
     */
  handleChange(e){
      const title=e.target.value;
      this.props.changeTitle(title);
  }
   /**
     * render
     * @return {ReactElement} markup
     */
  render(){

    return (
      <div>
  <h1>React Base Framework</h1>
 

</div>
     );
  }
}


