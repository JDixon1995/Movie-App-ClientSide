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
    			<Nav.Link href='/types'>Genres</Nav.Link>
  			</Nav.Item>
  				<Nav.Item>
  		</Nav.Item>
</Nav>
	</div>
  )
}
export default NavBar