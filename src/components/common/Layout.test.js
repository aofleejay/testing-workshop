import React from 'react'
import { shallow } from 'enzyme'
import Layout, { Header, Content } from './Layout'

describe('Test layout ui structure', () => {
  describe('Match its snapshot', () => {
    it('When all props exists', () => {
      const Child = () => <p>child component.</p>

      const wrapper = shallow(
        <Layout>
          <Child />
        </Layout>
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('When no props exists', () => {
      const wrapper = shallow(<Layout />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

describe('Test Header styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Test Content styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Content />)

    expect(wrapper).toMatchSnapshot()
  })
})
