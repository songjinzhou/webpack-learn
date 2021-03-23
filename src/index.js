import React, { Component } from 'react';
import { render } from 'react-dom'
import './index.less'

function Hello(params) {
  return <div className="hello">Hello, webpack</div>
}

render(<Hello />, document.getElementById('root'))

