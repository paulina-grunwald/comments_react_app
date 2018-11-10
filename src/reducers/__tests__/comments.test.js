import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles action of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'Test comment'
  }
  const newState = commentsReducer([], action)
  expect(newState).toEqual(['Test comment'])
})

it('reducer handles action with unknown type', () => {
  const newState = commentsReducer([], {})
  expect(newState).toEqual([])
})
