import React, {Component} from 'react';
import Chip from './playerChip';

class PlayerArea extends Component{

  render(){
    const{id, name, color, pokemon1, pokemon2, pokemon3} = this.props.player;

    return(

      <div className={`player-container-${id}`}>

          <div className='playerImagesWrapper'>
            <div className={`playerImageContainer`}>
            </div>

            <div className={`playerCardContainer`}>
            </div>
          </div>
          

          <div className={`playerName`}>
          </div>

          <div className={`chipArea${id % 2 ? '' : '_reverse'}`}>
            {/* <Chip
            playerID = {id}
            numberID = {'1'}
            color = {`${color}`}
            pokemonID = {pokemon1}
            /> */}
            {/* <Chip
            playerID = {id}
            numberID = {'2'}
            color = {`${color}`}
            pokemonID = {pokemon2}
            />
            <Chip
            playerID = {id}
            numberID = {'3'}
            color = {`${color}`}
            pokemonID = {pokemon3}
            /> */}
          </div>

      </div>
    )
  }
}

export default PlayerArea;


 /* <div className='player-image'>
      <img className='player-image_border' src={'assets/images/Borders/player-border.png'}/>
      <img className = 'player-image_image' src = {`https://fillmurray.com/50/50`} id={`player-image-${id}`}/>
    </div>

    <div className='card'>
      <img className='card_border' src={'./assets/images/Borders/card-border.png'}/>
      <img className = 'card_image' src = {`https://fillmurray.com/60/60`}/>
    </div> */