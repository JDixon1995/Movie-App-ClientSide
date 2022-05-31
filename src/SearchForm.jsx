import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'

const SearchForm = () => {
  return (
	<div>
		<Form className="form">
			<Form.Group className="mb-3">
				<Form.Control placeholder="Input movie title here..."></Form.Control>
			</Form.Group>
		</Form>
	</div>
  )
}
export default SearchForm