import React from 'react'
import Navbar from './Navbar'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1>MOVE YOUR CITY</h1>
          <Navbar pseudo={this.props.pseudo} />
        </header>
      </div>
    )
  }
}

export default Header
