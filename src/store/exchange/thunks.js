import * as actions from './actions'
import { getExchangeRate } from './selectors'

export const changeValues = ({ value, convertDirection }) => (
  dispatch,
  getState,
) => {
  const exchangeRate = getExchangeRate(getState())
  const input = parseFloat(value)
  if (Number.isNaN(input)) {
    return
  }
  if (convertDirection === 'from') {
    const fromValue = input.toString()
    const toValue = (Math.round(input * exchangeRate * 1000) / 1000).toString()

    dispatch(actions.changeFromValue(fromValue))
    dispatch(actions.changeToValue(toValue))
  } else if (convertDirection === 'to') {
    const toValue = input.toString()
    const fromValue = (Math.round(input / exchangeRate * 1000) / 1000).toString()
    
    dispatch(actions.changeFromValue(fromValue))
    dispatch(actions.changeToValue(toValue))
  }
}
