import React from 'react'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
  render() {
    return (
      <>
        <div id='header'>
          <h1>Stacks and Overflows</h1>
          <Nav id='navBar'>
            <Nav.Item>
              <Nav.Link href='https://github.com/ABCT-Mid/CFTrail'>Backend Repo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='https://github.com/ABCT-Mid/stacks-and-overflows'>Frontend Repo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='https://github.com/ABCT-Mid/CFTrail/blob/dev/README.md'>Read Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </>
    )
  }
}

export default Header;
