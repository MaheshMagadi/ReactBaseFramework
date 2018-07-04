// Link.react-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import App from './App';
import expect from 'expect'


describe("Test App component", function() {
   
    it("checks for number of elements", function() {
        const wrapper = shallow(<App />);
        expect(wrapper.length).toEqual(1)
    });
});
