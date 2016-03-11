import React from 'react';
import CatCount from './components/CatCount';
import CatColor from './components/CatColor';
import config from './config';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1> 
                <CatCount />
                <CatColor />
            </div>
        );
    }
}

App.propTypes = {
    text: React.PropTypes.string
};

App.defaultProps = {
    text: 'This is the default text!'
};

//const App = () => <h1>Hello World</h1>;
export default App;

