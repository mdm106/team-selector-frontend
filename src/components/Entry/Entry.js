import React, { Component } from "react";

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
        };

        this.handleNameInput = this.handleNameInput.bind(this);

        this.handleAbilityInput = this.handleAbilityInput.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameInput(e, index) {
        let names = this.state.playerNames.slice();
        names[index] = e.currentTarget.value;
        this.setState({ playerNames: names });
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
                <h3>Enter Team Names Here:</h3>
                <form onSubmit={this.handleSubmit}>
                    {totalPlayers.map((value, index) => (
                        <div className="container" key={index}>
                            <div className="form-group">
                                <label
                                    for={`player${value}Name`}>
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
                    <button className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}


export default Entry;
