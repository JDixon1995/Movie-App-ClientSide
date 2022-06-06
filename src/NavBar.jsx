import React from 'react'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
	<div>
		<Nav variant="tabs" defaultActiveKey="/home">
  			<Nav.Item>
    			<Nav.Link href="/home">Home/Search</Nav.Link>
  			</Nav.Item>
  			<Nav.Item>
    			<Nav.Link eventKey="link-1">Genres</Nav.Link>
  			</Nav.Item>
  				<Nav.Item>
  		</Nav.Item>
</Nav>
	</div>
  )
}
export default NavBar