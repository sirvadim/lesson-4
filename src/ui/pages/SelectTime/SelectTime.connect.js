import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { changeToTime, changeFromTime } from '@store/exchange/actions'
import { SelectTime } from './SelectTime'

export const SelectTimeContainer = connect(
  null,
  { changeToTime, changeFromTime, push },
)(SelectTime)
