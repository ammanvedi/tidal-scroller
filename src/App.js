import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from './component/example/ExampleComponent';
import { Provider } from 'react-redux';
import store from './store/Store'

class App extends React.Component {
    render() {
        return (
            <Provider store={ store } >
                <ExampleComponent />
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
  );