import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import Cards from './Cards'
function ListCards({list}) {

  return (
    <>
      {
        list.map((value, index) => {
          return <Col key={index}><Cards value={value} /></Col>
        })
      }
    </>
  )
}

export default ListCards
