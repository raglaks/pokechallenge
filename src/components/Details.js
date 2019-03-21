import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Details extends Component { 

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        console.log(this.props);

        return(

            <Grid item>
            <h3 className='upper'>{this.props.data.name}</h3>
            <img id={this.props.id} src={this.props.data.sprite} alt={this.props.data.name}></img>
            <p className='upper'>Type(s): {this.props.data.type.map(el=>el,)}</p>
            <p>Experience: {this.props.data.exp}</p>
            <p>Height: {this.props.data.height}</p>
            <p>Weight: {this.props.data.weight}</p>

            <button id='close' onClick={this.props.click} className="btn">
                    Close 
            </button>
            
            </Grid>
    
        )

    }

}

export default Details;