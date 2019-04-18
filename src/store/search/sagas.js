import { takeEvery, select, put, call, delay, all } from 'redux-saga/effects'
import * as actions from './actions'
import { getInputData, getHistory } from './selectors'
import { changeCountry1, changeCountry2 } from '../exchange/actions'
import { getCountryFlag } from '../exchange/selectors'
const compareObjects = function(o1, o2) {
  for (var p in o1) {
    if (o1.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        if (typeof o1[p] === 'object' && typeof o2[p] === 'object') continue

        return false
      }
    }
  }
  for (var p in o2) {
    if (o2.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        if (typeof o1[p] === 'object' && typeof o2[p] === 'object') continue
        return false
      }
    }
  }
  return true
}

function* workerInput(action) {
  yield put(actions.changeStatus('loading'))
  const inputData = yield select(getInputData)
  console.log('input', inputData)
  if (inputData) {
    try {
      const res = yield call(
        fetch,
        `https://restcountries.eu/rest/v2/name/${inputData}?fields=name;currencies;alpha2Code`,
      )
      const result = yield call([res, res.json])
      console.log('result', result)
      let countries = result
      for (let obj of countries) {
        obj['title'] = obj['name']
        obj['id'] = obj['alpha2Code']
        obj['key'] = obj['alpha2Code']
        obj['currencies'] = obj['currencies'][0]
        delete obj['name']
        delete obj['alpha2Code']
      }
      console.log('countries', countries)
      yield put(actions.changeCountries(result))
      yield put(actions.changeStatus(''))
    } catch (e) {
      yield put(actions.changeStatus('notFound'))
    }
  } else yield put(actions.changeStatus('initial'))
}

function* workerHistory(action) {
  let history = yield select(getHistory)

  history.forEach(function(item, i, arr) {
    if (compareObjects(action.payload, item)) history.splice(i, 1)
  })
  history.splice(0, 0, action.payload)

  yield put(actions.changeHistory(history))
  yield put(actions.changeStatus('initial'))
  yield put(actions.changeInput(''))
  let flag = yield select(getCountryFlag)
  if (flag === 1) yield put(changeCountry1(action.payload))
  else if (flag === 2) yield put(changeCountry2(action.payload))
}

export function* searchWatcher() {
  yield takeEvery(actions.changeInput.toString(), workerInput)
  yield takeEvery(actions.triggerHistory.toString(), workerHistory)
}
