import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


class App extends React.Component{

    constructor() {
        super();
        this.setState = { button: 'default'}

        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
    }

    handleClick() {
      this.setState(prevState => {
        
      })

    }

    handleHover() {

    }


    render() {
   return (<div>
       <button type="text" onClick={this.handleClick} onHover={this.handleHover}>Default</button>
   </div>)
} 
}





ReactDOM.render(<App />, document.getElementById('root'))


