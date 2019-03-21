import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class ItemC extends Component { 

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return(

            <Grid item><img id={this.props.id} src={this.props.data.sprite} alt={this.props.data.name} onClick={this.props.click}></img></Grid>
    
        )

    }

}

export default ItemC;