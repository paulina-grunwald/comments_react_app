import React, { Component } from 'react'
import * as actions from 'actions'
import {connect} from 'react-redux'
class CommentBox extends Component {
  state = {comment: ''}
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  componentDidMount() {
    this.shouldNavigateAway()
  }

  componentDidUpdate() {
    this.shouldNavigateAway()
  }

  shouldNavigateAway() {
    if(!this.props.auth) {
      this.props.history.push('/')
      console.log('redirect')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comment</button>
      </div>
    );
  }
}

function mapStateToPtops(state) {
  return {auth: state.auth}
}

export default connect(mapStateToPtops, actions)(CommentBox)
