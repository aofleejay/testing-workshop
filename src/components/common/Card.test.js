import React from 'react'
import { shallow } from 'enzyme'
import Card, { Container, Text, Title } from './Card'

describe('Test card ui structure', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      id: 1,
      title: 'Lorem',
      body: 'Ipsum.',
    }

    wrapper = shallow(<Card {...props} />)
  })

  it('Should render correct card title', () => {
    const cardTitle = wrapper.find('#card-title-1')

    expect(cardTitle).toHaveLength(1)
    expect(cardTitle.props()).toHaveProperty('children', 'Lorem')
  })

  it('Should render correct card body', () => {
    const cardBody = wrapper.find('#card-body-1')

    expect(cardBody).toHaveLength(1)
    expect(cardBody.props()).toHaveProperty('children', 'Ipsum.')
  })

  describe('Match its snapshot', () => {
    it('When all props exists', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('When no props exists', () => {
      props.title = undefined
      wrapper = shallow(<Card {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})

describe('Test Container styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Container />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Test Text styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Text />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Test Title styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Title />)

    expect(wrapper).toMatchSnapshot()
  })
})
