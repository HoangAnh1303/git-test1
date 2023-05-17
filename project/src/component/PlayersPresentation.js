import React from 'react'
import player from '../Players'
export default function PlayersPresentation({ players }) {
    //console.log(players);
    return (
        <div className='container'>
            {players.map((players) => (
                <div className='column'>
                    <div className='card'>
                    <img src={process.env.PUBLIC_URL + player.img}/>
                        <h3>{players.name}</h3>
                        <p className='title'>{players.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            )
            )}

        </div>

    )
}