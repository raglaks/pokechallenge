import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemC from './ItemC';
import axios from 'axios';

class GridC extends Component { 

    constructor(props) {

        super(props);

        this.state = {};

    }

    entryNos = [];

    pokeInfo = [];

    pokeFull = [];

    componentDidMount(){

        //initial get request for all pokedex info when component mounts
        axios.get('https://pokeapi.co/api/v2/pokedex/1/').then((res)=>{

            //save info in state

            let allAmount = res.data.pokemon_entries.length;

            this.setState({pokeArrs: res.data.pokemon_entries, all: allAmount});

            //run check arrs method to extract id from each pokemon and use it to get back poke info
            this.checkArrs(this.state.pokeArrs);
        });

    }

    checkArrs(arr){

        //map through and build new array with ids
        arr.map(el=>{

            this.entryNos.push(el.entry_number);

        });

        //set id array in state when done looping then loop through ids to perform multiple get requests for specific poke info
        this.setState({entries: this.entryNos}, ()=>{

            this.state.entries.map(el=>{

                axios.get(`https://pokeapi.co/api/v2/pokemon/${el}`).then((res)=>{

                    let poke = {};

                    poke.id = res.data.id;

                    poke.name = res.data.species.name;

                    poke.exp = res.data.base_experience;

                    poke.sprite = res.data.sprites.front_default

                    poke.type = res.data.types.map(el=>el.type.name);

                    poke.height = res.data.height;

                    poke.weight = res.data.weight;
    
                    this.pokeFull.push(poke);

                    this.setState({full: this.pokeFull});

                });
    
            });

        });

    }

    handleClick = event => {

        event.preventDefault();
    
        let click = event.target;

        console.log(click);
    
        //this.updateState(click);
    };

    updateState(click) {

        this.setState({id: click});

        console.log('state updated bec of click', this.state.id);

    }

    render() {

        let rend;

        let rows;

        if (this.state.all) {

            let len = this.state.all;

            if (this.state.full) {

                if(this.state.full.length === len) {

                    rows = this.state.full.map((el, key)=>{

                        return <ItemC data={el} click={this.handleClick} id={key}/>

                    });

                    rend = <Grid container justify={'center'} spacing={24}>
    
                            {rows}

                        </Grid>

                }

            }

        } else {

            rend = <h1 className='center'>loading</h1>;

        }

        return(

            <div>

                {rend}
        
            </div>

        )

    }

}

export default GridC;