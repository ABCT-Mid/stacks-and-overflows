import React from 'react'
import { Modal, ListGroup } from 'react-bootstrap'
import Dragon from './dragon.jpg'


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <>
        <Modal
          show={this.props.resultsModal}
          size='xl'
          centered
          onHide={this.props.closeResultsModal}
        >
          <Modal.Header closeButton>
            <Modal.Title className='modalTitle'>Top Scores!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
            <img src={Dragon} alt='dragon'/>
              <ListGroup.Item>Beau: 100000</ListGroup.Item>
              <ListGroup.Item>Tray: 85000</ListGroup.Item>
              <ListGroup.Item>Tanner: 80000</ListGroup.Item>
              <ListGroup.Item>Nova: 66000</ListGroup.Item>
              <ListGroup.Item>Petra: 61445</ListGroup.Item>
              <ListGroup.Item>Ken Griffey: 51510</ListGroup.Item>
              <ListGroup.Item>Albert Einstein: 49999</ListGroup.Item>
              <ListGroup.Item>Cleopatra: 37600</ListGroup.Item>
              <ListGroup.Item>Smeagol: 12000</ListGroup.Item>
              <ListGroup.Item>Andres: 1</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}


export default Results;
