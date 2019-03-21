import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class ItemC extends Component { 

    constructor(props) {

        super(props);

        this.state = {};

    }

    // mouseIn(e){

    //     e.preventDefault();

    //     this.setState({style: maxWidth: 200%})

    // }

    // mouseOut(e){

    //     e.preventDefault();

    // }

    render() {

        //console.log(this.props);

        return(

            <Grid item><img id={this.props.id} src={this.props.data.sprite} alt={this.props.data.name} onClick={this.props.click}></img></Grid>

        )

    }

}

export default ItemC;