import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Filter({filter}) {
  return (
    <ListGroup>
      <ListGroup.Item onClick={() => filter('All')} >All</ListGroup.Item>
      <ListGroup.Item onClick={() => filter('s')} >s</ListGroup.Item>
      <ListGroup.Item onClick={() => filter('m')} >m</ListGroup.Item>
    </ListGroup>

  )
}

export default Filter
