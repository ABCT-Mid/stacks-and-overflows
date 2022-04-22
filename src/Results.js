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

    // let recentPlayer = this.props.results[0];

    let sortedResults = this.props.results.sort((a,b) => {
      return +b.health - +a.health
    })

    let displayedResults = sortedResults.map((char) => (
     
        <ListGroup.Item key={char.username}>
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
