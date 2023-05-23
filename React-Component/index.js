import React from 'react'; // importing react dependencies from react
import ReactDom from 'react-dom'; //importing react-dom which enables to utilize 'render' method
function Component() { //creating component
  return <h1>I am a react component</h1> //must return
}

ReactDom.render(<Component/>,document.getElementById('root'));
