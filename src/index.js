import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // This is the ONLY time we do a direct assignment to this.state!
        this.state = { 
            lat: null,
            errorMessage: ''
        };
    }

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
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Finding location...</div>;
    }
}

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);