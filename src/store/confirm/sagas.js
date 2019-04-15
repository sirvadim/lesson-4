import { takeEvery, put, select, call } from 'redux-saga/effects'
import * as types from './types'
import * as actions from './actions'
import { getCodeValue } from './selectors'

function* confirmWorker() {
  yield put(actions.start())

  try {
    const code = yield select(getCodeValue)
    const res = yield call(
      fetch,
      `https://my-json-server.typicode.com/IgorAntonov/confirmation/number?${code}`,
    )
    const { status } = yield call([res, res.json])

    if (status === 'OK') {
      yield put(actions.done())
    } else {
      throw new Error('error')
    }
  } catch (e) {
    yield put(actions.failure())
  }
}

export function* confirmWatcher() {
  yield takeEvery(types.TRIGGER, confirmWorker)
}
