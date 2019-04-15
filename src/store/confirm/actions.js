import * as types from './types'

export const changeCode = value => ({
  type: types.CHANGE_CODE,
  payload: {
    value,
  },
})

export const resetState = () => ({
  type: types.RESET,
})

export const trigger = () => ({
  type: types.TRIGGER,
})
export const start = () => ({
  type: types.START,
})
export const done = () => ({
  type: types.DONE,
})
export const failure = () => ({
  type: types.FAILURE,
})
