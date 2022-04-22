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
    let displayedResults = this.props.results.map((char, index) => (
      <ListGroup.Item key={index}>
        <p>Name: {char.username}</p>
        <p>Job: {char.id}</p>
        <p>Health: {char.health}</p>
        <p>You answered {char.answeredCorrectly} correctly</p>
        </ListGroup.Item>
    ))
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
              {displayedResults}
            </ListGroup>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}


export default Results;
