# Comments-React-App

# Getting started

Checkout my repo, install dependencies and then start with the following:

```
> git clone https://github.com/paulina-grunwald/testing_react_app.git
> cd testing_react_app
> npm install
> npm start
```
# About the project

This project include exercises from [Advanced Reat and Redux Course](https://www.udemy.com/react-redux-tutorial/learn/v4/content). __I highly recommand this course__. The course contains detailed walkthroughs on advanced React and Redux concepts - Authentication, Testing, Middlewares, HOC's, and Deployment.

# Frameworks and libraries & packages used for this project
- [Redux](https://redux.js.org/)
- [React](https://reactjs.org)
- [JSON Schema](https://json-schema.org/)
- [tv4](https://github.com/geraintluff/tv4)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)

# Notes from the course

## 1. Testing

Libraries used for testing:

- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)

Unit and integration tests are used for testing on this app. 

## 2. Higher Order components
-  A higher-order component (HOC) is an advanced technique in React for reusing component logic.
- Concretely, a higher-order component is a function that takes a component and returns a new component.
-  Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
- HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.
- HOCs add features to a component. They shouldn’t drastically alter its contract. It’s expected that the component returned from a HOC has a similar interface to the wrapped component.

## 3. Middleware
You can find more information about Redux Middleware [here](https://redux.js.org/advanced/middleware)
Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. You can have more than one middleware in the app. Each middleware has ability to inspect action and if it doesn't care about action it can send it to next middleware.

Second custom middleware was created to check if the redux state is of the right format. We will use validating framework using JSON Schema. First we create JSON Schema and then create middleware.

[Jsonschema.net](https://jsonschema.net/) is an easy tool to create Json Schema from JSON. To validate state against JSON SCHEMA we can use small package [tv4](https://github.com/geraintluff/tv4)

## 4. Server Setup - Autentification