import React from 'react';

export default class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            type1: null,
            type2: null,
            next: 'https://pokeapi.co/api/v2/pokemon/1',
            height: null,
            weight: null,
            sprite: null
        };
    }
    async componentDidMount() {
        const url = this.state.next;
        const res = await fetch(url);
        const pokemon = await res.json();

        this.setState({
            id: pokemon.id,
            name: pokemon.name,
            type1: pokemon.types[0].type.name,
            type2: pokemon.types[1].type.name,
            next: 'https://pokeapi.co/api/v2/pokemon/'+(pokemon.id+1),
            height: pokemon.height,
            weight: pokemon.weight,
            sprite: pokemon.sprites.front_default
        });
    }
    render() {
        return (
            <div>
                <img src={this.state.sprite} ></img>
                <div>id: {this.state.id}</div>
                <div>name: {this.state.name}</div>
                <div>type 1: {this.state.type1}</div>
                <div>type 2: {this.state.type2}</div>
                <div>height: {this.state.height}</div>
                <div>weight: {this.state.weight}</div>
                <div>next: {this.state.next}</div>
                
            </div>
        );
    }
}