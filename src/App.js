import React, {Component} from "react";
import CharacterImage from "./components/CharacterImage";
import characters from "./characters.json";
import CharacterWrapper from "./components/CharacterWrapper";
import Title from "./components/Title";
import SiteWrapper from "./components/SiteWrapper";

class App extends Component {
    state = {
        allCharacters: characters,
        clickedCharacters: []

    };

    clickImage = id => {
        if(this.state.clickedCharacters.indexOf(id) === -1){
            const clickedCharacters = this.state.clickedCharacters;
            clickedCharacters.push(id);
            this.setState({clickedCharacters : clickedCharacters})
            this.shuffleImages();
        }
        else{
            this.setState({clickedCharacters : []})
        }

    };

    shuffleImages = () => {
        const newArray = [];
        const currentOrder = this.state.allCharacters;
        while(currentOrder.length > 0){
            let randomIndex = Math.floor(Math.random() * currentOrder.length);
            newArray.push(currentOrder[randomIndex]);
            currentOrder.splice([randomIndex],1);
        }
        this.setState({allCharacters: newArray});
    }

    render(){
        return(
            <SiteWrapper>
                <Title score={this.state.clickedCharacters.length}></Title>
                <CharacterWrapper>
                {this.state.allCharacters.map(character => (
                    <CharacterImage
                    clickImage={this.clickImage}
                    id={character.id}
                    key={character.id}
                    image={character.image}
                    alt={character.name}
                    />
                ))}
                </CharacterWrapper>
            </SiteWrapper>
        )
    }
}

export default App;