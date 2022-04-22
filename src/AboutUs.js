import React from 'react';
import { Modal, Card } from 'react-bootstrap'
import Andres from './Andres.jpg'
import Beau from './beau.jpg'


import tan from './IDclose2.PNG'
import Tray from './faces.jpg'


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
                <img src={Andres} alt='Andres' className='ourPhotos'/>
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
                <img src={Tray} alt='Chattray' className='ourPhotos'/>
                <p>Full stack software developer who loves to nerd out about plants!</p>
                <p>Job: Mechanic</p>
                <p>Skills: Breaking things apart, then fixing them back up! *BOB THE BUILDER!*</p>
                <p>Strength: 40</p>
                <p>Agility: 20</p>
                <p>Sussy: 1</p>
                <div className='AboutUsLinks'>
                  <a href='https://github.com/orgs/ABCT-Mid/people/Zavvy-Glitch'>GitHub</a>
                  <a href='https://www.linkedin.com/in/chattray-chea/'>LinkedIn</a>
                </div>

              </Card.Body>
            </Card>
            <Card className='cards'>
              <Card.Title>Tanner Percival</Card.Title>
              <Card.Body>
                <img src={tan} alt='Tanner' className='ourPhotos'/>
                <p>Full stack software developer who is passionate about the environment!</p>
                <p>Job: Wizard</p>
                <p>Skills: Doing wizard things</p>
                <p>Strength: 1</p>
                <p>Agility: 50</p>
                <p>Sussy: 100</p>
                <p>intelect: 80</p>
                <p>Full Stack Software Developer in ASP.NET Core C#/Node.js AWS with Javascript</p>
                <div className='AboutUsLinks'>
                  <a href='https://github.com/orgs/ABCT-Mid/people/Tanner253'>GitHub</a>
                  <a href='https://www.linkedin.com/in/tannerperc/'>LinkedIn</a>
                </div>

              </Card.Body>
            </Card>
            <Card className='cards'>
              <Card.Title>Beau Hibbert</Card.Title>
              <Card.Body>
                <img src={Beau} alt='Beau' />

                <p>Full Stack Software Developer with a background in Economics</p>
                <div className='AboutUsLinks'>
                  <a href='https://github.com/orgs/ABCT-Mid/people/BeauHibbert'>GitHub</a>
                  <a href='https://www.linkedin.com/in/beau-hibbert/'>LinkedIn</a>
                  <p>Job: Unicorn</p>
                  <p>Strength: 75</p>
                  <p>Agility: 10</p>
                  <p>Sussy: 200</p>
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