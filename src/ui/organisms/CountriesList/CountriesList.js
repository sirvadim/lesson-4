import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Caption2 } from '@ui/atoms/Typography'
import { Country } from '@ui/molecules'

const TitleContainer = styled.div`
  padding-left: ${({ theme }) => theme.paddings.main}px;
`

export const CountriesList = ({ list, selectCountry, title }) =>
  list.length > 0 ? (
    <>
      <TitleContainer>
        <Caption2>{title}</Caption2>
      </TitleContainer>
      {list.map(({ title, id, currencies }) => (
        <Country
          key={id}
          title={title}
          id={id}
          currencies={currencies}
          onPress={selectCountry}
        />
      ))}
    </>
  ) : null

CountriesList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currencies: PropTypes.object.isRequired,
    }),
  ).isRequired,
  selectCountry: PropTypes.func.isRequired,
}
