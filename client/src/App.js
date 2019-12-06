import React from 'react';
import axios from 'axios';
import './App.css';
import { PlayerList } from './components/PlayerList';

class App extends React.Component {

  state = {
    players: []
  }

  componentDidMount(){
    console.log('cDM');

    axios
      .get('http://localhost:5000/api/players')
      .then((res) => {
        console.log(res.data)
        this.setState({players: res.data})
        console.log('Players state', this.state.players)
      })

  }
  
  render() {
    return (
      <div className="App">
        <PlayerList players={this.state.players}/>
      </div>
    )
  }
  
}

export default App;
