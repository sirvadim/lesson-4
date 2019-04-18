import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'

const Container = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
  border-bottom: 1px ${({ theme }) => theme.pallete.divider} solid;
`

export const Country = ({ title, id, currencies, onPress }) => (
  <Container onClick={() => onPress(title, id, currencies)}>
    <Body2>{title}</Body2>
  </Container>
)

Country.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  arr: PropTypes.array,
  onPress: PropTypes.func.isRequired,
}
