// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a React component
const App = function() {
    return <div>Hi there! I'm just getting started.</div>
}

// Take the react component and show it on the screen
ReactDOM.render(
<App/>,
document.querySelector('#root')
);

