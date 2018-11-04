import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { TidalSlider } from './component/Container/SliderComponent/TidalSlider';
import { Provider } from 'react-redux';
import store from './store/Store'

class App extends React.Component {
    render() {
        return (
            <Provider store={ store } >
                <TidalSlider />
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
  );
