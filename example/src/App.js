import React, { Component } from 'react';
import Button from './components/Button/ButtonAsync.js';
import Link from './components/Link/LinkAsync.js';

export default class App extends Component {
  render() {
    return (
      <div>
        Test:
        <Button>BUTTON</Button> <Link href='http://google.com'>LINK</Link>
      </div>
    );
  }
}
