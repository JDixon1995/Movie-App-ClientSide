import React from 'react'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
	<div>
		<Nav variant="tabs" defaultActiveKey="/home">
  			<Nav.Item>
    			<Nav.Link href="/">Home/Search</Nav.Link>
  			</Nav.Item>
			<Nav.Item>
    			<Nav.Link href="https://github.com/JDixon1995">My GitHub</Nav.Link>
  			</Nav.Item>
			  <Nav.Item>
    			<Nav.Link href="https://www.linkedin.com/in/john-dixon-452266203/">My LinkedIn</Nav.Link>
  			</Nav.Item>
</Nav>
	</div>
  )
}
export default NavBar