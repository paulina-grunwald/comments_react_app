import React, { Component } from 'react'

class CommentBox extends Component {
  state = {comment: ''
  }
  handleChange = (e) => {
    this.setState({comment: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // to do: add action creator
    this.setState({comment: ''})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment</h4>
        <textarea onChange={this.handleChange } value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox
