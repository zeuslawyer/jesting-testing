import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box  ", () => {
  //test
  expect(
    wrapped.find(CommentBox).length //get EVERY instance of CommentBox and return array
  ).toEqual(1); //make sure there is one and ONLY one Comment Box
});

it("shows the comment list ", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
