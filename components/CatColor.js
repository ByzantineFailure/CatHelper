import React from 'react';
import ReactDOM from 'react-dom';
import ColorSlider from './ColorSlider';
import config from '../config';

class CatColor extends React.Component {
    constructor() {
        super();
        this.state =  {
            red: config.newCatRed, 
            green: config.newCatGreen, 
            blue: config.newCatBlue
        };

        this.update = this.update.bind(this);
        //TODO:  Somehow set our initial slider values.  Use ReactDOM here?
    }
    update() {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value
        });
    }
    render() {
        var colorStyle = {
            height: "200px",
            width: "200px",
            backgroundColor: "rgb(" + this.state.red + "," + this.state.green + "," + this.state.blue + ")"
        }
        return (
            <div>
                <h1>Get your new cat color</h1>
                <ColorSlider ref="red" update={this.update} />
                {this.state.red}
                <br/>
                <ColorSlider ref="green" update={this.update} />
                {this.state.green}
                <br/>
                <ColorSlider ref="blue" update={this.update} />
                {this.state.blue}
                <br/>
                <div ref="color-sample" style={colorStyle}></div>
            </div>
        );
    }
}

export default CatColor;

