import { takeLatest, put, select, call, delay, all } from 'redux-saga/effects'
import * as types from './types'
import * as actions from './actions'
import { getNumberValue } from './selectors'

function* signInWorker() {
  yield put(actions.start())

  try {
    const number = yield select(getNumberValue)
    const { res } = yield all({
      res: call(
        fetch,
        `https://my-json-server.typicode.com/IgorAntonov/confirmation/number?${number}`,
      ),
      latency: delay(5000)
    })

    const { status } = yield call([res, res.json])

    if (status === 'OK') {
      yield put(actions.done())
    } else {
      throw new Error('error')
    }
  } catch (e) {
    console.warn(e)
    yield put(actions.failure())
  }
}

export function* signInWatcher() {
  yield takeLatest(types.TRIGGER, signInWorker)
}
