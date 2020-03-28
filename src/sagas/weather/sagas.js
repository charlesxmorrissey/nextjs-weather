import { put } from 'redux-saga/effects'
import DarkSkyApi from 'src/utils/DarkSkyApi'

import {
  fetchWeatherSuccess,
  fetchWeatherError,
} from 'src/store/weather/actions'

DarkSkyApi.apiKey = process.env.DARK_SKY_SECRET_KEY

export function* fetchWeather() {
  try {
    const response = yield DarkSkyApi.loadCurrent()

    yield put(fetchWeatherSuccess(response))
  } catch (error) {
    yield put(fetchWeatherError(error))
  }
}

export function* weatherWatcher() {
  yield fetchWeather()
}
