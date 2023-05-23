import React from 'react';
import ReactDom from 'react-dom';
function Component() {
  return <h1>I am a react component</h1>
}

ReactDom.render(<Component/>,document.getElementById('root'));
