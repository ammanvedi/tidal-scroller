import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { TidalSlider } from './component/Container/SliderComponent/TidalSlider';
import { Provider } from 'react-redux';
import store from './store/Store'
/* eslint-disable-next-line no-unused-vars */
import styles from './styles/Global.scss';
/* eslint-disable-next-line no-unused-vars */
import fonts from './styles/Global.scss';

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
    document.getElementById('tidal-slider')
  );
