import React, {Component} from 'react';
import {connect} from 'react-redux';

import PlayerArea from './playerArea';

class MainPage extends Component {

  render(){

    return(
      <div className='gamepage'>

        {/*All of the player info boxes, including the chips*/}

        <PlayerArea
          player = {this.props.Players[0]}
        />
        <PlayerArea
          player = {this.props.Players[1]}
        />
        <PlayerArea
          player = {this.props.Players[2]}
        />
        <PlayerArea
          player = {this.props.Players[3]}
        />
    </div>

  )
  }
}

function mapStateToProps(state) {
  const Players = state.Players;
  return{
    Players
  }
};

MainPage = connect(mapStateToProps)(MainPage);

export default MainPage;
