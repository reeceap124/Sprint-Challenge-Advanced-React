import React from 'react';
import {PlayerCard} from './PlayerCard'
import axios from 'axios';

class PlayerList extends React.Component  {
    state = {
        players: []
      }
    
    componentDidMount(){
        
        axios
          .get('http://localhost:5000/api/players')
          .then((res) => {
            this.setState({players: res.data})
           
          })
    
    }

    render(){
        return (
        <div data-testId='playerList'>
            {this.state.players.map(player =>(
                <PlayerCard key={player.id} player={player} data-testId='player'/>
            ))}
        </div>
    )
    }
    
}

export default PlayerList