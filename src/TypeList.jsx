import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const TypeList = () => {
  return (
	<div className='container'>
		<div className='btn-container'>
			<ButtonGroup size="lg" className="mb-2">
    			<Button>Movies</Button>
    			<Button>Series</Button>
    			<Button>Episodes</Button>
  			</ButtonGroup>
		</div>
	</div>
  )
}
export default TypeList