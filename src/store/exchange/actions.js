import { createAction } from 'redux-act'

export const changeTerms = createAction('exchange/CHANGE_TERMS')

export const changeFromTime = createAction('exchange/CHANGE_FROM_TIME')
export const changeToTime = createAction('exchange/CHANGE_TO_TIME')

export const changeValuesTrigger = createAction(
  'exchange/CHANGE_VALUES_TRIGGER',
)
export const changeFromValue = createAction('exchange/CHANGE_FROM_VALUE')
export const changeToValue = createAction('exchange/CHANGE_TO_VALUE')

export const changeCountry1 = createAction('exchange/CHANGE_COUNTRY1')
export const changeCountry2 = createAction('exchange/CHANGE_COUNTRY2')
export const changeCountryFlag = createAction('exchange/CHANGE_COUNTRYFLAG')
export const changeRate = createAction('exchange/CHANGE_RATE')
