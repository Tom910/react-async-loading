import React, { Component } from 'react';

const errorLoading = (err) => console.error('asyncComponent: Loading failed', err);
const isFunction = (func) => Object.prototype.toString.call(func) === '[object Function]';
const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

export default (loader, { placeholder } = {}) => {
  class asyncComponent extends Component {
    constructor() {
      super();

      this.state = {
        component: null
      };
      this.mounting = true;
    }

    componentDidMount() {
      if (!isFunction(loader)) {
        return console.error('asyncComponent: Loader is not function');
      }

      const component = loader();

      if (!isPromise(component)) {
        return console.error('asyncComponent: Loader doesn\'t return a promise');
      }

      component
        .then((module) => this.mounting && this.setState({ component: module.default || module }))
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

  return asyncComponent;
}
