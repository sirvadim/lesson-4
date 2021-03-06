import { takeEvery, select, put, call } from 'redux-saga/effects'

import * as actions from './actions'
import { getExchangeRate, getCountry1, getCountry2 } from './selectors'

function* worker(action) {
  const { value, convertDirection } = action.payload
  const exchangeRate = yield select(getExchangeRate)
  const input = parseFloat(value)
  if (Number.isNaN(input)) {
    return
  }
  if (convertDirection === 'from') {
    const fromValue = input.toString()
    const toValue = (Math.round(input * exchangeRate * 1000) / 1000).toString()

    yield put(actions.changeFromValue(fromValue))
    yield put(actions.changeToValue(toValue))
  } else if (convertDirection === 'to') {
    const toValue = input.toString()
    const fromValue = (
      Math.round((input / exchangeRate) * 1000) / 1000
    ).toString()

    yield put(actions.changeFromValue(fromValue))
    yield put(actions.changeToValue(toValue))
  }
  const country1 = yield select(getCountry1)
  const country2 = yield select(getCountry2)
  try {
    const res = yield call(
      fetch,
      `https://api.exchangeratesapi.io/latest?base=${country1.currencies.code}`,
    )
    const result = yield call([res, res.json])
    console.log('result', result.rates)
    let value
    Object.keys(result.rates).forEach(function eachKey(key) {
      if (key === country2.currencies.code) value = result.rates[key]
    })
    yield put(actions.changeRate(value))
  } catch (e) {}
}

export function* exchangeWatcher() {
  yield takeEvery(actions.changeValuesTrigger.toString(), worker)
}
