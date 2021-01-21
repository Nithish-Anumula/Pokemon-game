import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css';
class Pokedex extends Component{
    
    render() {
        let Ans;
        if(this.props.isWinner){
            Ans = <h1 className = "Pokedex-Winner">Winning hand</h1>
        }else{
            Ans = <h1 className = "Pokedex-Looser">Loosing hand</h1>
        }
        return (
            <div className = "Pokedex">
               {Ans}
                <h4>Total Experience: {this.props.exp}</h4>
                
                <div className= "Pokedex-cards">
                {this.props.pokemon.map((p) =>(
                    <Pokecard id= {p.id} name = {p.name} type= {p.type} exp = {p.base_experience}/>
                ))}
                </div>
                
            </div>
        );
    }
}

export default Pokedex;