/**
 * @jest-environment jsdom
*/

import React from 'react'
// mount for Full DOM Rendering
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'
let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

// with describe you can
describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()
  })

  it('has a text area in which user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('when form is submitted, text area gets emptied', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    wrapped.find('form').simulate('submit')
    wrapped.update()

    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
