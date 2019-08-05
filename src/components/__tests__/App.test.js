// @ts-nocheck

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

/*
    this test uses enzyme's shallow DOM render.
    If you want a  fullDOM render, use 'mount' as shows in CommentBox.test
*/

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box  ', () => {
  //test
  expect(
    wrapped.find(CommentBox).length //get EVERY instance of CommentBox and return array
  ).toEqual(1); //make sure there is one and ONLY one Comment Box
});

it('shows the comment list ', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
