import React from 'react';
import asyncComponent from '../../../../src/asyncComponent.js';

export default asyncComponent(() => System.import('./Link.js'), { placeholder: <div>Loading</div> });
