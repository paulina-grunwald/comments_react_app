import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Header extends Component {
  render () {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/signin'>Signin</Link>
        <Link to='/signout'>Sign out</Link>
        <Link to='/feature'>Feature</Link>
      </div>
    )
  }
}

export default Header
