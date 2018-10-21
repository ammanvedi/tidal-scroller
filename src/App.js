import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from './component/example/ExampleComponent';

class App extends React.Component {
    render() {
        return (
            <ExampleComponent />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
  );