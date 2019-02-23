import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

/*
    this test does not use enzyme's shallow DOM render.
    instead it uses the fullDOM render, hence 'mount' is imported
*/

//SETUP
let wrapped;
beforeEach(setup);
function setup() {
  wrapped = mount(<CommentBox />);
  console.log('***Setup completed***');

}

// CLEANUP and UNMOUNT as mount() = FULLDOM render
afterEach(cleanup);
function cleanup() {
  wrapped.unmount();
  console.log('***Unmounted.***');
}


describe("tests the CommentBox and Its Children", () => {
  // test 1
  it("has a textArea and a button ", () => {
    const textareas = wrapped.find("textarea");
    const buttons = wrapped.find("button");
    console.log(textareas);
    console.log(buttons.length);
    expect(textareas.length).toEqual(1);
    expect(buttons.length).toEqual(1);
  });
});

