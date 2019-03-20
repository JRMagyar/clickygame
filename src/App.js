import React, {Component} from "react";
import CharacterImage from "./components/CharacterImage";
import characters from "./characters.json";
import CharacterWrapper from "./components/CharacterWrapper";
import Title from "./components/Title";
import SiteWrapper from "./components/SiteWrapper";

class App extends Component {
    state = {
        allCharacters: characters,
        clickedCharacters: [],
        highscore: 0

    };

    clickImage = id => {
        if(this.state.clickedCharacters.length === 11){
            if(this.state.clickedCharacters.indexOf(id) === -1){
                alert("You won!")
                this.setState({highscore: 12})
                this.setState({clickedCharacters : []})
                this.shuffleImages();
            }
            else{
                if(this.state.highscore < 11){
                    this.setState({highscore: 11})
                }
                this.setState({clickedCharacters : []})
                this.shuffleImages();
            }
        }
        else{
            if(this.state.clickedCharacters.indexOf(id) === -1){
                this.state.clickedCharacters.push(id);
                this.shuffleImages();
            }
            else{
                if(this.state.clickedCharacters.length > this.state.highscore){
                    this.setState({highscore: this.state.clickedCharacters.length})
                }
                this.setState({clickedCharacters : []})
                this.shuffleImages();
            }
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
                <Title score={this.state.clickedCharacters.length} highscore={this.state.highscore}></Title>
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