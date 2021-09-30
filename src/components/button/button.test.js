import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from '../';

test('Button changes the class when hovered', () => {
  const component = renderer.create(
    <Button color="white-two" text="title" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});