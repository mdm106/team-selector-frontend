import React, { Component } from "react";

import Input from "../FormControls/Input";
import Select from "../FormControls/Select";
import Button from "../Buttons/Button";

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
            nameConfirmed: false,         
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
            team1Name: "Team 1",
            team2Name: "Team 2",
        })
    }

    handleConfirmName() {
        this.setState({
            team1Name: this.props.team1Name,
            team2Name: this.props.team2Name,
            nameConfirmed: true,
        })
    }

    render() {
        let {
            team1Name,
            team2Name,
            teamSize,
            abilityPick,
            namePicked, 
            nameConfirmed,
        } = this.state;

        return (
            <div className="container">
            <h3 className="instructions-heading">Team Details</h3>
            {!nameConfirmed ? 
            <div className="name-picker-text">
                <p className="name-picker-para">Need inspiration? Use our name picker:</p>
                <Button className="btn btn-danger"
                        onClick={this.handleNameButton}
                        message={!namePicked ? "Click me for cool names!" : "Click again for more names!"} />
            </div> : null }
            {namePicked && !nameConfirmed ? 
            <>
            <Button onClick={this.handleConfirmName}
                    message={"Use these!"}
                    className={"btn btn-primary name-picker-first"} />                  
            <Button onClick={this.handleResetNameButton}
                    message={"I'll choose my own thanks"}
                     />
             </> : null }
             {namePicked ? 
             <ul className="team-name-list">
                <h4>Your team names are:</h4>
                    <li>
                        <h5>{this.props.team1Name}</h5>
                    </li>
                    <li>
                        <h5>{this.props.team2Name}</h5>
                    </li>
             </ul> : null }
            <form>
                {!namePicked ?
                <>
                <Input label={"Team 1 Name:"}
                       field={team1Name}
                       type={"text"}
                       value={namePicked ?  this.props.team1Name : team1Name}
                       handleChange={this.handleTeam1Name} 
                />
                <Input label={"Team 2 Name:"}
                       field={team2Name}
                       type={"text"}
                       value={namePicked ?  this.props.team2Name : team2Name}
                       handleChange={this.handleTeam2Name} 
                />
                </> : null}
                {!namePicked || nameConfirmed ?
                <>
                <Select field={"teamSize"}
                        value={teamSize}
                        label={"Players per team:"}
                        handleChange={this.handleTeamSize}
                        options={["3", "4", "5", "6", "7", "8", "9", "10", "11"]}
                />
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
                <Button type={"submit"}
                        onClick={this.handleSubmit}
                        message={"Submit"} />
                </>
                : null}
            </form>
            </div>
        );
    }
}

export default Settings;