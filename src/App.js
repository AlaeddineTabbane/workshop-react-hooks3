import logo from './logo.svg';
import './App.css';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import ListCards from './components/ListCards'
import Filter from './components/Filter'
import { useEffect, useRef, useState } from 'react';
import Button from '@restart/ui/esm/Button';
function App() {
  const [list, setList] = useState([{
    name: 'Name 1',
    description: 'Description 1',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    size: 's'
  },
  {
    name: 'Name 2',
    description: 'Description 2',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    size: 's'
  },
  {
    name: 'Name 3',
    description: 'Description 3',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    size: 'm'
  },
  {
    name: 'Name 4',
    description: 'Description 4',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    size: 'm'
  }])
  const refName = useRef()
  const [listFiltered, setListFiltered] = useState([])
  useEffect(() => {
    console.log('useEffect');

    const listMovie = list
    setListFiltered([...listMovie])

    // return () => { }
  }, [])

  const filter = (size) => {
    if (size === 'All') {
      setListFiltered([...list])
    } else {
      const arr = list.filter(a => a.size === size)
      setListFiltered([...arr])
    }
  }

  useEffect(() => {
    console.log('listFiltered updated');

  }, [listFiltered])

  const addElement = () => {
    const name = refName.current.value
    const obj = {
      name: name,
      description: 'Description ' + name,
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      size: 's'
    }
    const l = list
    l.push(obj)
    setList([...l])
    setListFiltered([...l])
  }

  return (
    <Container fluid>
      <div>
        <input ref={refName} />
        <Button onClick={addElement} variant="primary">Primary</Button>
      </div>
      <Row>
        <Col xs={3}>
          <Filter filter={(size) => filter(size)} />
        </Col>
        <Col>
          <Row>
            <ListCards list={listFiltered} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
