import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Caption2 } from '@ui/atoms/Typography'
import { Time } from '@ui/molecules'

const TitleContainer = styled.div`
  padding-left: ${({ theme }) => theme.paddings.main}px;
`

const ListContainer = styled.div`
  height: 490px;
  overflow: auto;
`

const times = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
]

export const TimeList = ({ selectTime, title }) => (
  <>
    <TitleContainer>
      <Caption2>{title}</Caption2>
    </TitleContainer>
    <ListContainer>
      {times.map(time => (
        <Time key={time} onPress={() => selectTime(time)}>
          {time}
        </Time>
      ))}
    </ListContainer>
  </>
)

TimeList.propTypes = {
  title: PropTypes.string.isRequired,
  selectTime: PropTypes.func.isRequired,
}
