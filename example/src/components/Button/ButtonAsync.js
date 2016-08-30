import asyncComponent from '../../../../src/asyncComponent.js';

export default asyncComponent(() => require.ensure([], (require) => require('./Button.js'), 'Button'));
