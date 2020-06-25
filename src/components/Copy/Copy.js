import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Copy extends Component {
    constructor(props) {
        super(props);

        let makeText = (team1Name, team2Name, teams) => {
            if(teams.length > 0 ) {
                let team1 = teams[0].reduce((string, player) => string + player.name + "\n", "\n");
                let team2 = teams[1].reduce((string, player) => string + player.name + "\n", "\n");
                return "Team: " + team1Name + team1 + "\nTeam: " + team2Name + team2;
            }
            else {
                return "";
            }
        }

        this.state = {
            value: makeText(props.team1Name, props.team2Name, props.teams),
            copied: false,
        }
        
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState({ copied: true })
    }
    
    render() {
        return (
        <>    
            <CopyToClipboard 
                text={this.state.value}
                onCopy={this.handleCopy}>
                    <button className="btn btn-primary">
                        Copy team details to clipboard
                    </button>
            </CopyToClipboard>
    
            {this.state.copied ? 
            <span className="copied-msg">
                Copied
            </span> 
            : null}
        </>
        );
  }
}

export default Copy;