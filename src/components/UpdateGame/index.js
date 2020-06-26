import { connect } from "react-redux";

import UpdateGame from "./UpdateGame";
import { getGames, putGame  } from "../../data/actions/api";

const mapStateToProps = ({ games, gamesLoaded }, { gameId }) => {
    return {
        game: games.find(({ id }) => id === +gameId),
        gamesLoaded,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleLoad: () => dispatch(getGames()),
        handleGameUpdate: (data, id) => {
            dispatch(putGame(data, id));
        }
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGame);