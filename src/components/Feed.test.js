import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Feed, { Form, TextInput, SubmitButton } from './Feed'

describe('Test Feed component', () => {
  let props

  beforeEach(() => {
    props = {
      posts: [
        { id: 1, title: 'My Title 1', body: 'My body 1' },
        { id: 2, title: 'My Title 2', body: 'My body 2' },
      ],
      inputText: 'My input text',
      onChangeText: () => {},
      onSubmit: () => {},
    }
  })

  describe('Match its snapshot', () => {
    it('When all props exists', () => {
      const wrapper = shallow(<Feed {...props} />)

      expect(wrapper).toMatchSnapshot()
    })

    it('When no props exists', () => {
      const wrapper = shallow(<Feed />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Test submit form', () => {
    it('Should call props onSubmit when submit form', () => {
      props.onSubmit = sinon.spy()
      const wrapper = shallow(<Feed {...props} />)
      wrapper.find('#post-form').simulate('submit')

      expect(props.onSubmit.callCount).toEqual(1)
    })

    it('Should call props onChangeText when typing in text input', () => {
      props.onChangeText = sinon.spy()
      const wrapper = shallow(<Feed {...props} />)
      wrapper.find('#input-text').simulate('change')

      expect(props.onChangeText.callCount).toEqual(1)
    })
  })
})

describe('Test Form styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Form />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Test TextInput styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<TextInput />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Test SubmitButton styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<SubmitButton />)

    expect(wrapper).toMatchSnapshot()
  })
})
