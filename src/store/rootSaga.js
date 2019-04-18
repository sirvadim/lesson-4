import { all, fork } from 'redux-saga/effects'

import { signInWatcher } from '@store/signIn/sagas'
import { confirmWatcher } from '@store/confirm/sagas'
import { routerWatcher } from './routerWatcher'
import { exchangeWatcher } from '@store/exchange/sagas'
import { searchWatcher } from '@store/search/sagas'

const watchers = [
  signInWatcher,
  confirmWatcher,
  routerWatcher,
  exchangeWatcher,
  searchWatcher,
]

export function* rootSaga() {
  yield all(watchers.map(fork))
}
