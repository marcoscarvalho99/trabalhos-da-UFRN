import React from 'react';

class Type extends React.Component{
    
    typo = tipo => {
        if(tipo === "normal"){ return 'Normal';}
        else if(tipo === "fighting"){ return 'Lutador'; }
        else if(tipo === "flying"){ return 'Voador'; }
        else if(tipo === "poison"){ return 'Veneno'; }
        else if(tipo === "ground"){ return 'Solo'; }
        else if(tipo === "rock"){ return 'Pedra'; }
        else if(tipo === "bug"){ return 'Inseto'; }
        else if(tipo === "ghost"){ return 'Fantasma'; }
        else if(tipo === "steel"){ return 'Aco'; }
        else if(tipo === "fire"){ return 'Fogo'; }
        else if(tipo === "water"){ return 'Agua'; }
        else if(tipo === "grass"){ return 'Grama'; }
        else if(tipo === "electric"){ return 'Eletrico'; }
        else if(tipo === "psychic"){ return 'Psiquico'; }
        else if(tipo === "ice"){ return 'Gelo'; }
        else if(tipo === "dragon"){ return 'Dragao'; }
        else if(tipo === "dark"){ return 'Sombrio'; }
        else if(tipo === "fairy"){ return 'Fada'; }
        else { return 'Desconhecido'}
    }
    render(){
        return(
            <div className={this.typo(this.props.type)}>
               <p>{this.typo(this.props.type)}</p>
            </div>
        )
    }
}
export default Type;