import React from 'react';
import { Modal, Card } from 'react-bootstrap'
import Andres from './Andres.jpg'

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <>
        <Modal
          show={this.props.teamModal}
          size='lg'
          centered
          onHide={this.props.closeTeamModal}
          id='modal'>
          <Modal.Header closeButton>
            <Modal.Title className='modalTitle'>About Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className='cards'>
              <Card.Title>Andres Mills Gallego</Card.Title>
              <Card.Body>
                <img src={Andres} alt='Andres' />
                <p>Full stack software developer who loves to travel, spend time with his family and learn new things!</p>
                <p>Job: Thief</p>
                <p>Skills: Being sneaky, keen eye for detail, and can fashion a quick tool out of almost anything</p>
                <p>Strength: 20</p>
                <p>Agility: 50</p>
                <p>Sussy: 101</p>
                <div className='AboutUsLinks'>
                  <a href='https://github.com/AndresMillsGallego'>GitHub</a>
                  <a href='https://www.linkedin.com/in/andres-mills-gallego/'>LinkedIn</a>
                </div>
              </Card.Body>
            </Card>
            <Card className='cards'>
              <Card.Title>Chattray Chea</Card.Title>
              <Card.Body>
                <img src='#' alt='Chattray' />

                <p>Software Developer</p>
                <div className='AboutUsLinks'>
                  <a href='https://github.com/orgs/ABCT-Mid/people/Zavvy-Glitch'>GitHub</a>
                  <a href='https://www.linkedin.com/in/chattray-chea/'>LinkedIn</a>
                </div>

              </Card.Body>
            </Card>
            <Card className='cards'>
              <Card.Title>Tanner Percival</Card.Title>
              <Card.Body>
                <img src='#' alt='Tanner' />

                <p>Software Developer</p>
                <div className='AboutUsLinks'>
                  <a href='https://github.com/orgs/ABCT-Mid/people/Tanner253'>GitHub</a>
                  <a href='https://www.linkedin.com/in/tannerperc/'>LinkedIn</a>
                </div>

              </Card.Body>
            </Card>
            <Card className='cards'>
              <Card.Title>Beau Hibbert</Card.Title>
              <Card.Body>
                <img src='#' alt='Beau' />

                <p>Software Developer</p>
                <div className='AboutUsLinks'>
                  <a href='https://github.com/orgs/ABCT-Mid/people/BeauHibbert'>GitHub</a>
                  <a href='https://www.linkedin.com/in/beau-hibbert/'>LinkedIn</a>
                </div>

              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default AboutUs;