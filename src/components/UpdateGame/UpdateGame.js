import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../FormControls/Input";
import Checkbox from "../FormControls/Checkbox";
import Button from "../Buttons/Button";
import Loading from "../Loading";

class UpdateGame extends Component {
    constructor(props) {
        super(props);

        let game = {};

        if(this.props.game) {
            game = this.props.game; 
        }
                          
        this.state = {
            gameDate: game.game_date,
            team1Name: game.team_1,
            team2Name: game.team_2,
            team1Score: game.team_1_score,
            team2Score: game.team_2_score,
            gameComplete: game.game_complete,
            gamesLoaded: this.props.gamesLoaded,        
        };

        this.handleGameDate = this.handleGameDate.bind(this);
        this.handleTeam1Name = this.handleTeam1Name.bind(this);
        this.handleTeam2Name = this.handleTeam2Name.bind(this);
        this.handleTeam1Score = this.handleTeam1Score.bind(this);
        this.handleTeam2Score = this.handleTeam2Score.bind(this);
        this.handleGameComplete = this.handleGameComplete.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.gamesLoaded) {
            this.props.handleLoad();
        }
    }
    // component did update needed as API call occurs after first mount if user enters url without previously being on app and thus having a previous api call i.e. if go to url with gamesLoaded = false
    componentDidUpdate(prevProps) {
        if (this.props.game !== prevProps.game && this.props.game) {
            this.setState({
                gameDate: this.props.game.game_date,
                team1Name: this.props.game.team_1,
                team2Name: this.props.game.team_2,
                team1Score: this.props.game.team_1_score,
                team2Score: this.props.game.team_2_score,
                gameComplete: this.props.game.game_complete,
                gamesLoaded: this.props.gamesLoaded,
            })
        }
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
        this.props.handleGameUpdate({ ...this.state }, this.props.gameId )
    }

    render() {

        let { gameDate,
              team1Name,
              team2Name,
              team1Score,
              team2Score,
              gameComplete } = this.state;
        
        let formIncomplete = team1Name === "" | team2Name === "" | gameDate === "";
        
        return (
            <div className="container">
                <h3 className="instructions-heading">Update Game details</h3>
                <Loading loaded={this.props.game}>
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
                    <Checkbox label={"Game completed?:"}
                          field={"gameComplete"}
                          checked={gameComplete}
                          handleChange={this.handleGameComplete} />
                    {gameComplete ? 
                    <>
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
                    </>
                    : null }
                    <div className="formErrors">
                        <p className="alert">
                            {formIncomplete ? "Please complete team names and game date" : "Game can be submitted!"}
                        </p>
                    </div> 
                    <Button type={"submit"}
                            message={"Submit"} />
                </form>
                <Link to={`/`}>
                    <p className="btn btn-primary">Back to Home</p>
                </Link>
                </Loading>
            </div>
        );
    }
}


export default UpdateGame;