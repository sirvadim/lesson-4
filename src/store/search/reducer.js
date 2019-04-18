import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
  status: 'initial',
  inputData: '',
  countries: [],
  history: [],
}

export const reducer = createReducer(
  {
    [actions.changeInput]: (state, payload) => ({
      ...state,
      inputData: payload,
    }),
    [actions.changeStatus]: (state, payload) => ({
      ...state,
      status: payload,
    }),
    [actions.changeCountries]: (state, payload) => ({
      ...state,
      countries: payload,
    }),
    [actions.changeHistory]: (state, payload) => ({
      ...state,
      history: payload,
    }),
  },
  initialState,
)
