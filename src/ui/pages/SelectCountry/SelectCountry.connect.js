import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { SelectCountry } from './SelectCountry'

export const SelectCountryContainer = connect(null, { push })(SelectCountry)