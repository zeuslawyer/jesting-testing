import React, { Component } from "react";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };
  }

  handleInput = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(" state:  ", this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // TODO - action creator to save comment

    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          onChange={this.handleInput}
          name="comment"
          value={this.state.comment}
        />
  
        <div>
          <button>ADD</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
