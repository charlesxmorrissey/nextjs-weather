import { takeLatest } from 'redux-saga/effects'

import { WEATHER_REQUEST } from 'src/store/actionTypes'

import { weatherWatcher } from './weather/sagas'

export default function* rootSaga() {
  yield takeLatest(WEATHER_REQUEST, weatherWatcher)
}
