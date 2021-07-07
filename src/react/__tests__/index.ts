import React from 'react'
import Select from '@/react/Select'
import renderer from 'react-test-renderer'

describe('test react', () => {
  it('hhh', () => {
    const component = renderer.create(React.createElement(Select))
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('hhh2', () => {
    const component = renderer.create(React.createElement(Select, {className: 'www'}))
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})