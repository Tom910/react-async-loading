# React Async Loading

```js
import { AsyncComponent } from 'react-async-loading';
// And export module...
export default AsyncComponent(() => System.import('./Link.js'));
```

Code splitting to React and Webpack

## Install

- Install the module: `npm install --save react-async-loading`
- Add plugin to you Webpack config:
```js
new webpack.optimize.CommonsChunkPlugin({
  children: true, // necessary for splitting children chunks
  async: true // necessary for async loading chunks
})
```

## Example
- [Simple](https://github.com/Tom910/react-async-loading/example)

## API

### AsyncComponent
#### Usage
```jsx
AsyncComponent(() => System.import('./Link.js'), { placeholder: <div>Loading</div> })
```
or
```jsx
AsyncComponent(() => require.ensure([], (require) => require('./Button.js'), 'Button'), { placeholder: <div>Loading</div> })
```

#### Props
##### - 1 argument
Required. There should be a function of the module is loaded. Webpack supports two varieties of modules. `SystemJS` and `require.ensure`. The only difference is in the syntax, and that you can specify the name of the chunk in require.ensure
- ``` System.import('./Link.js') ```
- ``` require.ensure([], (require) => require('./Button.js'), 'Button') ```

Webpack compiles
- `0.chunk.js` - numbers name in `SystemJS`
- `Button.chunk.js` - we set the name in `require.ensure`

##### - 2 argument
Setting options. Now available `placeholder` option, which displays the item is loaded chunk
