import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}!</div>
  </div>
);

const shallowR = TestUtils.createRenderer()


describe('My cool component', () => {
  it(`should render proper markup`, () => {
    shallowR.render(<CoolComponent greeting="Hello world" />)
    const [actual, expected] = [
      shallowR.getRenderOutput(),
      <div>Hello world!</div>
    ]
    expect(actual).toIncludeJSX(expected);
  });  
})
