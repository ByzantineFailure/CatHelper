import React from 'react';
import EnoughCats from './EnoughCats';
import config from '../config';

class CatCount extends React.Component {
    constructor() { 
        super();
        this.state = { 
            catCount: 0, 
        };
        this.update = this.update.bind(this);
    }
    update(event) {
        let value = parseInt(event.target.value);
        if(value || value === 0) {
            this.setState({ catCount: value });
        } else {
            this.setState({ catCount: 0 });
        }
    }
    render() {
        let catText = this.state.catCount === 1 ? 'cat' : 'cats';
        return (
            <div>
                <input type="number" ref="count" onChange={ this.update } />
                <p><b>You have {this.state.catCount} {catText}</b></p>
                <EnoughCats cat={ this.state.catCount } />
            </div>
        );
    }
}

export default CatCount;

