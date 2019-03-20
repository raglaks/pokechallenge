import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class GridC extends Component { 

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return(

            <div>
                <Grid container justify={'center'} spacing={40}>
            
                    <Grid item>smith</Grid>

                    <Grid item>westerns</Grid>

                    <Grid item>westerns</Grid>

                </Grid>

                <Grid container justify={'center'} spacing={40}>
                        
                    <Grid item>o</Grid>
        
                    <Grid item>m</Grid>
        
                    <Grid item>g</Grid>
        
                </Grid>
        

            </div>

        )

    }

}

export default GridC;