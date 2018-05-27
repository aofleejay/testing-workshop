import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('Test App component', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })
})
