import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import Demo1 from '@/demo/demo1';
import throttle from '@/tools/throttle';
import debounce from '@/tools/debounce';
import limitExec from '@/tools/limit-exec';

async function getA() {
  await new Promise((resolve => resolve(5)))
}

const b = 'a'
console.log(1)

ReactDOM.render(React.createElement(Demo1), document.getElementById('app'))

Array.prototype.push()

// Test 截流
const obj = {
  name: 'obj'
}

const a1 = throttle(function (...rest) {
  console.log('a1', rest, this)
}, 200, obj)

a1(2, 2, 3)

const a2 = debounce(function (...rest) {
  console.log('a2', rest, this)
}, 200, obj)

a2(1, 2, 3, 4)

const a3 = limitExec(function (...rest) {
  console.log('a3', rest, this)
}, 200, obj)

a3()
