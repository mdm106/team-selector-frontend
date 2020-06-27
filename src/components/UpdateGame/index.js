import { connect } from "react-redux";

import UpdateGame from "./UpdateGame";
import { getGames, putGame  } from "../../data/actions/api";

const mapStateToProps = ({ games, gamesLoaded }, { gameId }) => {
    return {
        game: games.find(({ id }) => id === +gameId), //game with the id in own props through match in app.js found from all games held in state following api call
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