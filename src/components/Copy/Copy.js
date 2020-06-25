import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Input from "../FormControls/Input";
 
class Copy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "!!!!!!",
            copied: false,
        }
        
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState({ copied: true })
    }
    
    render() {
        return (
        <div className="container">    
            <CopyToClipboard 
                text={this.state.value}
                onCopy={this.handleCopy}>
                    <button className="btn btn-primary">
                        Copy team details to share in email / WhatsApp etc!
                    </button>
            </CopyToClipboard>
    
            {this.state.copied ? 
            <span className="copied-msg">
                Copied.
            </span> 
            : null}
        </div>
        );
  }
}

export default Copy;