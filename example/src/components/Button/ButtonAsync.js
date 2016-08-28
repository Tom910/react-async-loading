import AsyncComponent from '../../../../src/AsyncComponent.js';

export default AsyncComponent(() => require.ensure([], (require) => require('./Button.js'), 'Button'));
