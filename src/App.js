import React, {Component} from "react";
import CharacterImage from "./components/CharacterImage";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";

class App extends Component {
    state = {
        allCharacters: characters,
        clickedCharacters: []
    };

    clickImage = id => {
        const newArray = [];
        const currentOrder = this.state.allCharacters;
        while(currentOrder.length > 0){
            let randomIndex = Math.floor(Math.random() * currentOrder.length);
            newArray.push(currentOrder[randomIndex]);
            currentOrder.splice([randomIndex],1);
        }
        this.setState({allCharacters: newArray});

    };

    render(){
        return(
            <Wrapper>
            {this.state.allCharacters.map(character => (
                <CharacterImage
                clickImage={this.clickImage}
                id={character.id}
                key={character.id}
                image={character.image}
                alt={character.name}
                />
            ))}
            </Wrapper>
        )
    }
}

export default App;