import test from 'ava';
import React from 'react';
import { mount, shallow } from 'enzyme';
import asyncComponent from '../src/asyncComponent.js';

const TestComponent = () => <div className='test-component'>TEST</div>;

test('asyncComponent: Test placeholder', t => {
  const Container = asyncComponent(() => Promise.resolve(null), { placeholder: <TestComponent /> });
  const tree = shallow(<Container />);

  t.true(tree.contains(<TestComponent />));
});

test('asyncComponent: Test loading module', t => {
  const promise = Promise.resolve(TestComponent);
  const Container = asyncComponent(() => promise);
  const tree = mount(<Container />);

  return promise.then(() => {
    t.true(tree.contains(<TestComponent />));
  });
});

test('asyncComponent: Test unmount', t => {
  const promise = Promise.resolve(TestComponent);
  const Container = asyncComponent(() => promise);
  const tree = mount(<Container />);

  tree.unmount();

  return promise.then(() => {
    t.is(tree.type(), undefined);
  });
});
