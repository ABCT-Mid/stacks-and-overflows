import React from 'react'
import './App.css';
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Button } from 'react-bootstrap'
import AboutUs from './AboutUs'
import Header from './Header'
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamModal: false,
      resultsModal: false,
      results: []
    }
  }

  closeTeamModal = () => this.setState({ teamModal: false });

  showTeamModal = () => this.setState({ teamModal: true });

  closeResultsModal = () => this.setState({ resultsModal: false });

  showResultsModal = () => this.setState({ resultsModal: true });

  getResults = async () => {
    try {
      let url = '';
      let results = await axios.get(url);
      this.setState({results: results.data})
    } catch (error) {
      console.log('Error with retreiving the results', error);
    }
  }

  render() {
    return (
      <>
        <main>
          <Header />
          <div id='portal'>
          <Button variant='secondary' onClick={this.showResultsModal} className='buttons'>Results!!</Button>
          <Button variant='secondary' onClick={this.showTeamModal} className='buttons'>About The Team</Button>
          </div>
          <Results 
            results={this.state.results}
            resultsModal={this.state.resultsModal}
            closeResultsModal={this.closeResultsModal}
            showResultsModal={this.showResultsModal}
          />
          <AboutUs
            closeTeamModal={this.closeTeamModal}
            showTeamModal={this.showTeamModal}
            teamModal={this.state.teamModal} />
        </main>
      </>
    )
  }
}

export default App;
