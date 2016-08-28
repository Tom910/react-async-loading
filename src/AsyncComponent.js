import React, { Component } from 'react';

const errorLoading = (err) => console.error('AsyncComponent: Loading failed', err);
const isFunction = (func) => Object.prototype.toString.call(func) === '[object Function]';

export default (loader, { placeholder } = {}) => {
  class AsyncComponent extends Component {
    constructor() {
      super();

      this.state = {
        component: null
      };
      this.mounting = true;
    }

    componentWillMount() {
      if (!isFunction(loader)) {
        return console.error('AsyncComponent: Loader is not function');
      }

      loader()
        .then((module) => this.mounting && this.setState({ component: module.default }))
        .catch(errorLoading);
    }

    componentWillUnmount() {
      this.mounting = false;
    }

    render() {
      if (this.state.component) {
          return <this.state.component {...this.props} />
      }

      return (
        placeholder || null
      );
    }
  }

  return AsyncComponent;
}
