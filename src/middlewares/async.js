export default ({ dispatch }) => next => action => {
  // Check to see if the action
  // has a promise on its 'payload' property
  // If it does, then wait for it
  // If it doesn't, then send it to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  // We want to wait for the promise to resolve
  // (get the data) and then create a new
  // action with that data and dispatch it

  action.payload.then(function (response) {
    // create new action and overwritte payload with the response
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
}
