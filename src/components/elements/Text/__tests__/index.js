import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../index';

jest.mock('react-router-dom');

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Text component="span">Text</Text>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
