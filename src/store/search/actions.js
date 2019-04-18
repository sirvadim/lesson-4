import { createAction } from 'redux-act'

export const changeInput = createAction('search/CHANGE_INPUT')
export const changeStatus = createAction('search/CHANGE_STATUS')
export const changeCountries = createAction('search/CHANGE_COUNTRIES')
export const triggerHistory = createAction('search/TRIGGER_HISTORY')
export const changeHistory = createAction('search/CHANGE_HISTORY')
