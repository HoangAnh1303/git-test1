import React, { Component } from 'react'
import { Players } from './ListOfPlayers'
export default class player extends Component {
    render() {
        return (
          /*   <div className='container'>
                <div className='column'>
                    <div className='card'>
                        <img src='asserts/images/cr.jpg' />
                        <h3>Cristiano Ronaldo</h3>
                        <p className='title'>Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src='asserts/images/kante.jpg'></img>
                        <h3>Kante</h3>
                        <p className='title'>Chelsea</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src='asserts/images/messi.jpg'></img>
                        <h3>Messi</h3>
                        <p className='title'>PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src='asserts/images/neymar.jpg'></img>
                        <h3>Neymar</h3>
                        <p className='title'>PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src='asserts/images/kane.jpg'></img>
                        <h3>Kane</h3>
                        <p className='title'>Tottemham</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src='asserts/images/haaland.jpg'></img>
                        <h3>Haaland</h3>
                        <p className='title'>Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div> */
<div className='container'>
    {Players.map((player)=>(
    <div className='column'>
        <div className='cart'>
            <img src={player.img}/>
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <p><button>Detail</button></p>
        </div>
    </div>
    ))}
</div>


)

    }
    

}