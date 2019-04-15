import { connect } from 'react-redux'

import { getCodeValue, getStatus } from '@store/confirm/selectors'
import { changeCode, trigger as confirmTrigger } from '@store/confirm/actions'
import { SignInConfirm } from './SignInConfirm'

const mapStateToProps = state => ({
  value: getCodeValue(state),
  status: getStatus(state),
})

export const SignInConfirmContainer = connect(
  mapStateToProps,
  { changeCode, confirmTrigger },
)(SignInConfirm)
