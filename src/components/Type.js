import React from 'react';

class Type extends React.Component{
    
    typo = t => {
        if(t === "normal"){ return 'Normal';}
        else if(t === "fighting"){ return 'Lutador'; }
        else if(t === "flying"){ return 'Voador'; }
        else if(t === "poison"){ return 'Veneno'; }
        else if(t === "ground"){ return 'Solo'; }
        else if(t === "rock"){ return 'Pedra'; }
        else if(t === "bug"){ return 'Inseto'; }
        else if(t === "ghost"){ return 'Fantasma'; }
        else if(t === "steel"){ return 'Aco'; }
        else if(t === "fire"){ return 'Fogo'; }
        else if(t === "water"){ return 'Agua'; }
        else if(t === "grass"){ return 'Grama'; }
        else if(t === "electric"){ return 'Eletrico'; }
        else if(t === "psychic"){ return 'Psiquico'; }
        else if(t === "ice"){ return 'Gelo'; }
        else if(t === "dragon"){ return 'Dragao'; }
        else if(t === "dark"){ return 'Sombrio'; }
        else if(t === "fairy"){ return 'Fada'; }
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