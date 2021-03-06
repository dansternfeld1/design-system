/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import { CloseButton, theme } from '..'

describe('CloseButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<CloseButton onClick={handleClick} theme={theme} />)
    wrapper.simulate('click')
    expect(handleClick).toBeCalled()
  })

  test('renders with theme only', () => {
    const json = renderer.create(<CloseButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
