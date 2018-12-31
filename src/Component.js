import * as Slider from './component/Container/SliderComponent/TidalSlider';
import * as Sagas from './store/Saga/FetchTidalData';
import * as Reducer from './store/Reducer/TidalDataReducer';
import * as Store from './store/Store';

export const TidalScroller = Slider;
export const TidalSaga = Sagas;
export const TidalReducer = Reducer;
export const TidalStore = Store;
