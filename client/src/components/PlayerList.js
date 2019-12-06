import React from 'react';
import {PlayerCard} from './PlayerCard'

export const PlayerList = props => {
    return (
        <div>
            {props.players.map(player =>(
                <PlayerCard key={player.id} player={player}/>
            ))}
        </div>
    )
}