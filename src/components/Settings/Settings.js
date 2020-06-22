import React, { Component } from "react";

class Settings extends Component {
    constructor(props) {
        super(props);

        // initial state with default values has been mapped to props in index file
        // local state set to these values
        this.state = {
            team1Name: props.team1Name,
            team2Name: props.team2Name,
            teamSize: props.teamSize,
            abilityPick: props.abilityPick, 
            namePicked: false,           
        };

        this.handleTeam1Name = this.handleTeam1Name.bind(this);
        this.handleTeam2Name = this.handleTeam2Name.bind(this);
        this.handleTeamSize = this.handleTeamSize.bind(this);
        this.handleAbilityPick = this.handleAbilityPick.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameButton = this.handleNameButton.bind(this);
        this.handleResetNameButton = this.handleResetNameButton.bind(this);
        this.handleConfirmName = this.handleConfirmName.bind(this);
    }

    handleTeam1Name(e) {
        this.setState({ team1Name: e.currentTarget.value });
    }

    handleTeam2Name(e) {
        this.setState({ team2Name: e.currentTarget.value });
    }

    handleTeamSize(e) {
        this.setState({ teamSize: e.currentTarget.value });
    }

    handleAbilityPick(e) {
        const target = e.target;
        const value = target.name === 'abilityPick' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSave({ ...this.state });
    }

    handleNameButton() {
        this.props.handleTeamName();
        this.setState((state, props) => ({
            namePicked: true,
            team1Name: props.team1Name,
            team2Name: props.team2Name,
        }));
    }

    handleResetNameButton() {
        this.setState({
            namePicked: false,
            team1Name: "",
            team2Name: "",
        })
    }

    handleConfirmName() {
        this.setState({
            team1Name: this.props.team1Name,
            team2Name: this.props.team2Name,
        })
    }

    render() {
        let {
            team1Name,
            team2Name,
            teamSize,
            abilityPick,
            namePicked, 
        } = this.state;

        return (
            <>
            <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={this.handleNameButton}>
                    Click me for cool names!</button>
            {namePicked ? 
            <>
            <h4>Your team names are:</h4>
            <h6>{this.props.team1Name} and {this.props.team2Name}</h6>
            <button 
                type="button"
                className="btn btn-primary"
                onClick={this.handleResetNameButton}>
                I'll choose my own thanks</button>
            <button 
                type="button"
                className="btn btn-primary"
                onClick={ this.handleConfirmName }>
                Happy with these</button> </> : null }
            <form>
                {!namePicked ?
                <>
                <div className="form-group">
                    <label htmlFor="team1Name">Team 1 Name:</label>
                    <input value={namePicked ?  this.props.team1Name : team1Name}
                           type="text"
                           className="form-control"
                           id="team1Name"
                           placeholder="Team 1 Name"
                           onChange={this.handleTeam1Name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="team2Name">Team 2 Name:</label>
                    <input value={namePicked ?  this.props.team2Name : team2Name}
                           type="text"
                           className="form-control"
                           id="team2Name"
                           placeholder="Team 2 Name"
                           onChange={this.handleTeam2Name} />
                </div> 
                </> : null}
                <div className="form-group">
                    <label htmlFor="teamSize">Players per team:</label>
                    <select value={teamSize}
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={this.handleTeamSize}>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
                <div className="form-check">
                    <label>
                        Select teams by ability:
                        <input
                            name="abilityPick"
                            type="checkbox"
                            checked={abilityPick}
                            onChange={this.handleAbilityPick} />
                    </label>
                </div>
                <button className="btn btn-primary"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Submit
                </button>
            </form>
            </>
        );
    }
}

export default Settings;