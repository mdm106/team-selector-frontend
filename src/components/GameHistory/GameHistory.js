import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

const GameHistory = (
    {
        games,
        handleLoad,
    }
) => {
    useEffect(() => {
        handleLoad()
    }, [])

    return (
        <div className="container history-table">
            <h3 className="instructions-heading">Game History</h3>
            <Loading loaded={games.length}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Game Date</th>
                            <th scope="col">Team Names</th>
                            <th scope="col">Score</th>
                            <th scope="col">Click link update</th>
                        </tr>
                    </thead>
                    <tbody>
                        { games.map((game, index) => (
                            <tr key={index} >
                                <td>{game.game_date}</td>
                                    <td>{`${game.team_1} | ${game.team_2}`}</td>
                                {game.game_complete===0 ?
                                    <td>--</td> : 
                                    <td>{ `${game.team_1_score} - ${game.team_2_score}` }</td> }
                                <td>
                                    <Link to={`/game-details/${game.id}`}>
                                        Update
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to={`/`}>
                    <div className="central-button">
                        <p className="btn btn-danger central-button">Back to home</p>
                    </div>
                </Link>
            </Loading>
        </div>
    )
}

export default GameHistory;