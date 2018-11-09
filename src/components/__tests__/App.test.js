import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment box', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  // Looks inside the div
  // and checks to see if the CommentBox exits in the App
  // console.log(div.innerHTML)
  expect(div.innerHTML).toContain('Comment Box')
  // clean up after test
  ReactDOM.unmountComponentAtNode(div)
})
 