import React, {Component} from "react";
import CharacterImage from "./components/CharacterImage";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";

class App extends Component {
    state = {
        characters
    };

    render(){
        return(
            <Wrapper>
            {this.state.characters.map(character => (
                <CharacterImage
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