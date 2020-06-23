import React, { Component } from "react";

import EntryErrors from "../EntryErrors/EntryErrors";
import Input from "../FormControls/Input";
import Button from "../Buttons/Button";

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
        //find duplicates in array not case sensitive
        let findDuplicates = arr => {
            arr = arr.map(name => name.toLowerCase());
            return arr.filter((name, index) => arr.indexOf(name) !== index);
        }

        ///switch statement for validation of playerNames, validation for additional fields can be added as necessary
        // boolean statements to change validation variables in state according to whether complete and unique name data has been added
        // validation messages set onto fieldValidationErrors according to wheter related to data completeness or uniqueness, this is set in state which is sent as props to the EntryErrors component which displays the message
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

    // sets formValid in state according to whether playerNamesComplete and playerNamesUnique is true, formValid state used to determine whether submit button is enabled
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
            <div className="container">
                <h3>Enter player names {abilityPick ? "and abilities" : null} here:</h3>
                <form onSubmit={this.handleSubmit}>
                    {totalPlayers.map((value, index) => (
                        <div key={index}>
                            <Input label={`Player ${value} Name:`}
                                    field={`player${value}Name`}
                                    type={"text"}
                                    value={playerNames[index]}
                                    handleChange={e => this.handleNameInput(e, index)}        
                            />
                            {/* Ternary so that the range form elements are only included if abilityPick = true */}
                            {!abilityPick ? null :
                                <Input 
                                    label={`Player ${value} Ability:`}
                                    field={`player${value}Ability`}
                                    type={"range"}
                                    inputClass={"custom-range"}
                                    value={playerAbilities[index]}
                                    handleChange={e => this.handleAbilityInput(e, index)} />
                            }
                        </div>
                    ))}
                    <Button type={"submit"}
                            message={"Submit"} 
                            disabled={!this.state.formValid} />
                    <div className="panel panel-default">
                        <EntryErrors formErrors={this.state.formErrors} />
                    </div>
                </form>
            </div>
        );
    }
}


export default Entry;
