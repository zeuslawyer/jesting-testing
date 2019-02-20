import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment box  ', () => {  
    // setup
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    
    //test
    expect(div.innerHTML).toContain('Comment Box')

    
    // cleanup
    ReactDOM.unmountComponentAtNode(div)
});
