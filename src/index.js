import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // This is the ONLY time we do a direct assignment to this.state!
        this.state = { 
            lat: 'Finding location...',
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //To update state, we ALWAYS use this.state!
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

 // React requires us to define a render method for our JSX
    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        )
    }
}

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);