import React, { Component } from 'react';

class Head extends Component { 

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return(   

            <h1 className='center'>Pokedex  <img id='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball'></img></h1>
            
        )

    }

}

export default Head;