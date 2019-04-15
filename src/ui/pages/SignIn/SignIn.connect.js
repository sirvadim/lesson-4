import { connect } from 'react-redux'

import { getNumberValue, getStatus } from '@store/signIn/selectors'
import { changeNumber, trigger as signInTrigger } from '@store/signIn/actions'
import { SignIn } from './SignIn'

const mapStateToProps = state => ({
  value: getNumberValue(state),
  status: getStatus(state),
})

export const SignInContainer = connect(
  mapStateToProps,
  { changeNumber, signInTrigger },
)(SignIn)
