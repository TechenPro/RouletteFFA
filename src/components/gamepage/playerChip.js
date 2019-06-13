import React, {Component} from 'react';

export default class Chip extends Component {

    constructor(props){
        super(props);

        this.state = {
            rolling: false,
            currentPokemonID: 1
        };

        this.imageURL = url(`./assets/images/Chips/${props.color}.png`);
    }

    render(){

        const {playerID, numberID} = this.props;

        return(
            <div className={`chip chip-${numberID}${playerID % 2 ? '-reverse' : ''}`}>
                <img
                    className='chip-image'
                    src={this.imageURL}
                />
                <img
                    className={`chip-pokemon-image`}
                />
            </div>
        )
    }
}
