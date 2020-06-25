import React, { Component } from "react";
import { Link } from "react-router-dom";

import EntryErrors from "../EntryErrors/EntryErrors";
import Input from "../FormControls/Input";
import Button from "../Buttons/Button";

class Entry extends Component {
    constructor(props) {
        super(props);

        //creates array of numbers 1-n according to the teamSize, where n is total number of players
        let array = Array.from(Array(props.teamSize * 2), (_, i) => i + 1);
        //if players already exist in state, local state is set to current state names and abilities
        let names = array.map(() => "");
        if(props.players.length !== 0) {
            names = props.players.map((player) => player.name);
        }
        let abilities = array.map(() => "50");
        if(props.players.length !== 0) {
            abilities = props.players.map((player) => player.ability);
        }
        
        this.state = {
            totalPlayers: array,
            playerNames: names,
            playerAbilities: abilities, ///this is the default value for the range, so if the user does not move the range scroller, an ability of 50 will be given
            formErrors: {
                incompletePlayerNames: "",
                duplicatePlayerNames: "",
            },
            playerNamesComplete: false,
            playerNamesUnique: false,
            formValid: props.reEntry,
            reEntry: props.reEntry,
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

    // sets formValid in state according to whether playerNamesComplete and playerNamesUnique is true, formValid state used to determine whether submit button is enabled, form is valid when user first returns to reenter data, but if a change is made to the form reentry is set to false and form is validated as normal
    validateForm() {
        this.setState({formValid: (this.state.playerNamesComplete && this.state.playerNamesUnique) || this.state.reEntry });
    }

    handleNameInput(e, index) {
        let names = this.state.playerNames.slice();
        names[index] = e.currentTarget.value;
        this.setState({ playerNames: names,
                        reEntry: false },
                        () => { this.validateField("playerNames", this.state.playerNames)});
    }

    handleAbilityInput(e, index) {
        let rankings = this.state.playerAbilities.slice();
        rankings[index] = e.currentTarget.value;
        this.setState({ playerAbilities: rankings,
                        reEntry: false });
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
                        <div className="player-form" key={index}>
                            <Input label={`Player ${value} Name:`} 
                            /*ternary so that groupClass is dependent on if abilityPick = true*/ 
                                    groupClass={(abilityPick ? "ability-pick " : "no-ability-pick") + " form-group"}
                                    field={`player${value}Name`}
                                    type={"text"}
                                    value={playerNames[index]}
                                    handleChange={e => this.handleNameInput(e, index)}        
                            />
                            {/* Ternary so that the range form elements are only included if abilityPick = true */}
                            {!abilityPick ? null :
                                <Input 
                                    label={"Ability:"}
                                    field={`player${value}Ability`}
                                    type={"range"}
                                    inputClass={"custom-range"}
                                    groupClass={(abilityPick ? "ability-pick " : "no-ability-pick") + " form-group"}
                                    value={playerAbilities[index]}
                                    handleChange={e => this.handleAbilityInput(e, index)} />
                            }
                        </div>
                    ))}
                    <div className="panel panel-default">
                        <EntryErrors formErrors={this.state.formErrors} />
                    </div>
                    <div className="adjacent-buttons">
                        <Button type={"submit"}
                                message={"Submit"} 
                                disabled={!this.state.formValid} />

                        <Link to={`/team-details`}>
                           <p className="btn btn-danger">Back</p>
                        </Link>
                    </div>
                </form>
                
            </div>
        );
    }
}


export default Entry;
