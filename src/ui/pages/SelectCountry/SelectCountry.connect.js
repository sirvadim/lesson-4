import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { SelectCountry } from './SelectCountry'

import {
  getInputData,
  getStatus,
  getCountries,
  getHistory,
} from '@store/search/selectors'
import {
  changeInput,
  changeStatus,
  triggerHistory,
} from '@store/search/actions'

const mapStateToProps = state => ({
  inputData: getInputData(state),
  status: getStatus(state),
  countries: getCountries(state),
  history: getHistory(state),
})

export const SelectCountryContainer = connect(
  mapStateToProps,
  { changeInput, changeStatus, triggerHistory, push },
)(SelectCountry)
