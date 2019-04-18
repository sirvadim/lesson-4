import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
  terms: false,
  fromTime: '00:00',
  toTime: '10:00',
  fromValue: '100',
  toValue: '1',
  country1: {
    currencies: { code: 'RUB', name: 'Russian ruble', symbol: '₽' },
    id: 'RU',
    title: 'Russian Federation',
  },
  country2: {
    currencies: { code: 'GBP', name: 'British pound', symbol: '£' },
    id: 'GB',
    title: 'United Kingdom of Great Britain and Northern Ireland',
  },
  country: 1,
  exchangeRate: 0.012,
}

export const reducer = createReducer(
  {
    [actions.changeTerms]: state => ({
      ...state,
      terms: !state.terms,
    }),
    [actions.changeFromValue]: (state, payload) => ({
      ...state,
      fromValue: payload,
    }),
    [actions.changeToValue]: (state, payload) => ({
      ...state,
      toValue: payload,
    }),
    [actions.changeFromTime]: (state, payload) => ({
      ...state,
      fromTime: payload,
    }),
    [actions.changeToTime]: (state, payload) => ({
      ...state,
      toTime: payload,
    }),
    [actions.changeCountry1]: (state, payload) => ({
      ...state,
      country1: payload,
    }),
    [actions.changeCountry2]: (state, payload) => ({
      ...state,
      country2: payload,
    }),
    [actions.changeCountryFlag]: (state, payload) => ({
      ...state,
      country: payload,
    }),
    [actions.changeRate]: (state, payload) => ({
      ...state,
      exchangeRate: payload,
    }),
  },
  initialState,
)
