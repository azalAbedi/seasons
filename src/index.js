import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // This is the ONLY time we do a direct assignment to state/this.state!
    state = { lat: null, errorMessage: '' };
        // We don't need to do this in the constructor function because
        // ... Babel will set up a constructor for us anyway to do this

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //To update state, we ALWAYS use this.state!
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // componentDidUpdate() {
    //     console.log('component re-rendered');
    // }

    // React requires us to define a render method for our JSX
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner />;
    }
}

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);