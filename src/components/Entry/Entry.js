import React, { Component } from "react";

import EntryErrors from "../EntryErrors/EntryErrors";

class Entry extends Component {
    constructor(props) {
        super(props);

        //creates array of numbers 1-n according to the teamSize, where n is total number of players
        let array = Array.from(Array(props.teamSize * 2), (_, i) => i + 1);

        // maps over the above array to produce an array of empty objects of length of total number of players
        this.state = {
            totalPlayers: array,
            playerNames: array.map(() => ""),
            playerAbilities: array.map(() => "50"), ///this is the default value for the range, so if the user does not move the range scroller, an ability of 50 will be given
            formErrors: {
                incompletePlayerNames: "",
                duplicatePlayerNames: "",
            },
            playerNamesComplete: false,
            playerNamesUnique: false,
            formValid: false,
        };

        this.handleNameInput = this.handleNameInput.bind(this);

        this.handleAbilityInput = this.handleAbilityInput.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let playerNamesComplete = this.state.playerNamesComplete;
        let playerNamesUnique = this.state.playerNamesUnique;
        let numberOfPlayers = this.state.totalPlayers.length;
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);

        switch(fieldName) {
            case "playerNames":
                playerNamesComplete = value.indexOf("") === -1;
                playerNamesUnique = playerNamesComplete && findDuplicates(value).length === 0;
                fieldValidationErrors.incompletePlayerNames = playerNamesComplete ? "" : `Please enter ${numberOfPlayers} player names`;
                fieldValidationErrors.duplicatePlayerNames = !playerNamesUnique && !playerNamesComplete ? "" : !playerNamesUnique && playerNamesComplete === true ? "Duplicate names present, please ensure all names are unique" : "Click submit to find out your teams!";
                break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        playerNamesComplete: playerNamesComplete,
                        playerNamesUnique: playerNamesUnique},
                        this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.playerNamesComplete && this.state.playerNamesUnique});
    }

    handleNameInput(e, index) {
        let names = this.state.playerNames.slice();
        names[index] = e.currentTarget.value;
        this.setState({ playerNames: names },
                        () => { this.validateField("playerNames", this.state.playerNames)});
    }

    handleAbilityInput(e, index) {
        let rankings = this.state.playerAbilities.slice();
        rankings[index] = e.currentTarget.value;
        this.setState({ playerAbilities: rankings });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleNameEntries({ ...this.state })
    }

    render() {
        const { playerNames, playerAbilities, totalPlayers } = this.state;

        const { abilityPick } = this.props;

        return (
            <>
                <h3>Enter player names {abilityPick ? "and abilities" : null} here:</h3>
                <form onSubmit={this.handleSubmit}>
                    {totalPlayers.map((value, index) => (
                        <div className="container" key={index}>
                            <div className="form-group">
                                <label
                                    htmlFor={`player${value}Name`}>
                                        {`Player ${value} Name:`}
                                </label>
                                <input
                                    value={playerNames[index]}
                                    type="text"
                                    className="form-control"
                                    id={`player${value}Name`}
                                    onChange={e => this.handleNameInput(e, index)}
                                    required />
                            </div>
                            {/* Ternary so that the range form elements are only included if abilityPick = true */}
                            {!abilityPick ? null :
                                <div className="form-group">
                                    <label
                                        for={`player${value}Ability`}>
                                            {`Player ${value} Ability:`}
                                    </label>
                                    <input
                                        value={playerAbilities[index]}
                                        type="range"
                                        className="custom-range"
                                        id={`player${value}Ability`}
                                        onChange={e => this.handleAbilityInput(e, index)}/>
                                </div>
                            }
                        </div>
                    ))}
                    <button className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
                    <div className="panel panel-default">
                        <EntryErrors formErrors={this.state.formErrors} />
                    </div>
                </form>
            </>
        );
    }
}


export default Entry;
