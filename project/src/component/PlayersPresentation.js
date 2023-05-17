import React from 'react'
export default function PlayersPresentation({ players }) {
    //console.log(players);
    return (
        <div className='container'>
            {players.map((players) => (
                <div className='column'>
                    <div className='card'>
                        <img sr={players.img} />
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