import React, { Component } from "react";

class Entry extends Component {
    constructor(props) {
        super(props);

        //create array of numbers according to the teamSize 
        let array = [...Array((props.teamSize)*2).keys()]; 
        
        // maps over the above array to produce an array of empty objects of length of total number of players
        this.state = {
            playerNames: array.map(() => {}),
            playerAbilities: array.map(() => {}),
        };

        this.handleNameInput = this.handleNameInput.bind(this);

        this.handleAbilityInput = this.handleAbilityInput.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    ///Forms in week 9 app is important for this
    handleNameInput(e, index) {
        let names = this.state.playerNames.slice();
        names[index] = { id: index, name: e.currentTarget.value };
        this.setState({ playerNames: names });
    }

    handleAbilityInput(e, index) {
        let rankings = this.state.playerAbilities.slice();
        rankings[index] = { id: index, ranking: e.currentTarget.value };
        this.setState({ playerAbilities: rankings });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleNameEntries({ ...this.state })
    }

    render() {
        return 
    }
}


export default Entry;
