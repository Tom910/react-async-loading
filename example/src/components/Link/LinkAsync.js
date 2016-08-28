import React from 'react';
import AsyncComponent from '../../../../src/AsyncComponent.js';

export default AsyncComponent(() => System.import('./Link.js'), { placeholder: <div>Loading</div> });
