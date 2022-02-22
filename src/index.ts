import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import Demo1 from '@/demo/demo1';

async function getA() {
  await new Promise((resolve => resolve(5)))
}

const b = 'a'
console.log(1)

ReactDOM.render(React.createElement(Demo1), document.getElementById('app'))

