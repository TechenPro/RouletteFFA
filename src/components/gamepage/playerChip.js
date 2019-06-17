import React, {Component} from 'react';

export default class Chip extends Component {

    constructor(props){
        super(props);

        this.state = {
            rolling: false,
            currentPokemonID: 1,
            currentImageID: 1
        };

        this.imageURL = `./assets/images/Chips/${props.color}.png`;
    }

    handleClick = function(playerID, numberID){
        this.setState({rolling: true});
        console.log(`Player: ${playerID} Chip: ${numberID}`);
        setTimeout(()=>{this.setState({rolling: false}, () => {clearInterval(this.intervalID)})}, 4000);
    }

    render(){

        const {playerID, numberID} = this.props;

        return(
            <div className={`chip chip-${numberID}`}>
                <img
                    className='chip-image'
                    src={this.imageURL}
                />
                <img
                    className={`chip-pokemon-image`}
                    src={`./assets/images/SpriteResources/${this.state.currentImageID}.png`}
                />
                {this.state.rolling ? null : 
                    <a onClick={() => {this.handleClick(playerID, numberID)}}/>
                }
            </div>
        )
    }
}
