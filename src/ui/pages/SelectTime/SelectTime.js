import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader } from '@ui/molecules'
import { TimeList } from '@ui/organisms'
import { routes } from '../../../routes'

export const SelectTime = ({
  from,
  changeFromTime,
  changeToTime,
  push,
}) => {
  const selectTime = time => {
    if (from) {
      changeFromTime(time)
    } else {
      changeToTime(time)
    }
    push(`${routes.EXCHANGE}`)
  }
  return (
    <PageTemplate>
      <ModalHeader action={() => push(`${routes.EXCHANGE}`)} />
      <HBox />
      <TimeList
        title={from ? 'Доставить от' : 'Доставить до'}
        selectTime={selectTime}
      />
    </PageTemplate>
  )
}

SelectTime.propTypes = {
  from: PropTypes.bool,
  changeFromTime: PropTypes.func.isRequired,
  changeToTime: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
}
