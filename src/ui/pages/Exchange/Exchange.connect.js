import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import {
  getTerms,
  getFromTime,
  getToTime,
  getFromValue,
  getToValue,
  getCountry1,
  getCountry2,
} from '@store/exchange/selectors'
import {
  changeTerms,
  changeValuesTrigger,
  changeCountryFlag,
} from '@store/exchange/actions'
import { Exchange } from './Exchange'

const mapStateToProps = state => ({
  terms: getTerms(state),
  fromTime: getFromTime(state),
  toTime: getToTime(state),
  fromValue: getFromValue(state),
  toValue: getToValue(state),
  country1: getCountry1(state),
  country2: getCountry2(state),
})

export const ExchangeContainer = connect(
  mapStateToProps,
  { changeTerms, changeValuesTrigger, changeCountryFlag, push },
)(Exchange)
