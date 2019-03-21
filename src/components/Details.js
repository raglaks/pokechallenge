import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Details extends Component { 

    constructor(props) {

        super(props);

        this.state = {};

    }

    // componentDidMount() {

    //     this.setState({data: this.props.data});

    // }

    render() {

        console.log(this.props);

        return(

            <Grid item><img id={this.props.id} src={this.props.data.sprite} alt={this.props.data.name} onClick={this.props.click}></img></Grid>
    
        )

    }

}

export default Details;