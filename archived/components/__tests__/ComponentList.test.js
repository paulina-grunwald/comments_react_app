/**
 * @jest-environment jsdom
*/
import React from 'react'
// mount for Full DOM Rendering
import { mount } from 'enzyme'
import Root from 'Root'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})
it('shows text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
})
