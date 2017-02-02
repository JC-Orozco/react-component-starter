import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../dist/hello.bundle.js';
//var Hello = ACE.Hello;

ReactDOM.render(<Hello name='Juan'/>, document.getElementById('app'));