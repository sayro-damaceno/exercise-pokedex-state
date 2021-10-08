import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
      super()

      this.state ={
        pokeIndex: 0
      }

      this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
      this.setState((state, props) => {
        if (state.pokeIndex === props.pokemons.length -1) {
          return {
            pokeIndex: 0
          }
        }
        return {
        pokeIndex: state.pokeIndex + 1
      }})
    }


    render() {
        return (
          <>
            <div className="pokedex">
                <div>{this.state.pokeIndex}</div>
                {this.props.pokemons.filter((_pokemon, index) => index === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
            <button className='next-pokemon' onClick={this.handleClick}>Next Pokémon</button>

            <div className='btns-types'>
              <button className='type' onClick={this.handleClick}>Fire</button>
              <button className='type' onClick={this.handleClick}>Psychic</button>
            </div>
          </>
        );
    }
}

export default Pokedex;