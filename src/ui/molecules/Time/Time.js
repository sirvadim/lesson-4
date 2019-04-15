import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.main}px;
  border-bottom: 1px ${({ theme }) => theme.pallete.divider} solid;
`

export const Time = ({ onPress, children }) => (
  <Container onClick={onPress}>
    <Body2>{children}</Body2>
  </Container>
)

Time.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}
