// Link.react-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Header from './Header';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import {render} from  'react-dom';
import expect from 'expect'

describe("Test Header component", function() {
  it("Checks for h1 tag inside component", function() {
      const wrapper = shallow(<Header />);
      expect(wrapper.contains(<h1>React Base Framework</h1>)).toEqual(true);
  });
  it("checks for number of elements", function() {
      const wrapper = shallow(<Header />);
      expect(wrapper.length).toEqual(1)
  });

});
