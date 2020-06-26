import React, { Component } from "react";

import Input from "../FormControls/Input";
import Checkbox from "../FormControls/Checkbox";
import Button from "../Buttons/Button";

class GameForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameDate: "",
            team1Name: props.team1Name,
            team2Name: props.team2Name,
            team1Score: 0,
            team2Score: 0,
            gameComplete: false,            
        };

        this.handleGameDate = this.handleGameDate.bind(this);
        this.handleTeam1Name = this.handleTeam1Name.bind(this);
        this.handleTeam2Name = this.handleTeam2Name.bind(this);
        this.handleTeam1Score = this.handleTeam1Score.bind(this);
        this.handleTeam2Score = this.handleTeam2Score.bind(this);
        this.handleGameComplete = this.handleGameComplete.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleGameDate(e) {
        this.setState({ gameDate: e.currentTarget.value });
    }

    handleTeam1Name(e) {
        this.setState({ team1Name: e.currentTarget.value });
    }

    handleTeam2Name(e) {
        this.setState({ team2Name: e.currentTarget.value });
    }

    handleTeam1Score(e) {
        this.setState({ team1Score: e.currentTarget.value });
    }

    handleTeam2Score(e) {
        this.setState({ team2Score: e.currentTarget.value });
    }

    handleGameComplete(e) {
        const target = e.target;
        const value = target.name === 'gameComplete' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleGameSave({ ...this.state })
    }

    render() {
        let {
            gameDate,
            team1Name,
            team2Name,
            team1Score,
            team2Score,
            gameComplete,
        } = this.state;

        return (
            <div className="container">
                <h3 className="instructons-heading">Game details</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input label={"Game date"}
                           field={"gameDate"}
                           value={gameDate}
                           type={"date"}
                           handleChange={this.handleGameDate} />
                    <Input label={"Team 1 Name"}
                           field={"team1Name"}
                           value={team1Name}
                           handleChange={this.handleTeam1Name} />
                    <Input label={"Team 2 Name"}
                           field={"team2Name"}
                           value={team2Name}
                           handleChange={this.handleTeam2Name} />
                    <Input label={"Team 1 Score"}
                           field={"team1Score"}
                           type={"number"}
                           value={team1Score}
                           handleChange={this.handleTeam1Score} />
                    <Input label={"Team 2 Score"}
                           field={"team2Score"}
                           type={"number"}
                           value={team2Score}
                           handleChange={this.handleTeam2Score} />
                    <Checkbox label={"Game completed?:"}
                          field={"gameComplete"}
                          checked={gameComplete}
                          handleChange={this.handleGameComplete} />
                    <Button type={"submit"}
                            message={"Submit"} />
                </form>
                
            </div>
        );
    }
}


export default GameForm;