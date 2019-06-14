import React, {Component} from 'react';

export default class Layout extends Component {
    render(){
        return(
            <div className='master-layout'>
                {this.props.children}
            </div>
        )
    }
}
