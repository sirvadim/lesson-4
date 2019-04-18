import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'
import { routes } from '../../../routes'
import * as Scroll from 'react-scroll'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
export const SelectCountry = ({
  inputData,
  status,
  countries,
  history,
  changeInput,
  triggerHistory,
  changeStatus,
  push,
}) => (
  <PageTemplate>
    {console.log('status', status)}
    <ModalHeader action={() => push(`${routes.EXCHANGE}`)}>
      <SearchInput onChange={changeInput} />
    </ModalHeader>
    <HBox />
    {status === '' || status === 'initial' ? (
      <Element
        name="test2"
        className="element"
        style={{
          position: 'relative',
          height: status === '' ? '90vh' : 'auto',
          overflow: 'scroll',
          marginBottom: '100px',
        }}
      >
        <CountriesList
          title={inputData ? 'Страны' : 'История поиска'}
          list={inputData ? countries : history}
          selectCountry={(title, id, currencies) => {
            push(`${routes.EXCHANGE}`)
            triggerHistory({ title, id, currencies })
            console.log(title, id, currencies)
          }}
        />
      </Element>
    ) : null}
    {status === '' ? null : <SearchStatus status={status} />}
  </PageTemplate>
)

SelectCountry.propTypes = {
  push: PropTypes.func.isRequired,
}
