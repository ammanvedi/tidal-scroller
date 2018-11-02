//@flow
import type { Effect } from 'redux-saga';

import { watchFetchTidalData } from './FetchTidalData';

export default function * rootSaga(): Generator<Generator<Effect, void, void>, void, void>  {
    yield watchFetchTidalData();
}
