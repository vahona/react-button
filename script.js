import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'





class App extends React.Component{

    constructor() {
        super();
        this.setState = { button: 'default'}

        this.handleClick = this.handleClick.bind(this)
        // this.handleHover = this.handleHover.bind(this)
    }


    handleClick () {
    
    }


    render() {
   return (<div className = "list-button">
       <Button className="default"/>
       <Button className="gray" />
       <Button className="white" />
       <Button className="light-blue" />
       <Button className="no-border" />
       <Button className="blue-no-border" />
       <Button className="blue" />
       <Button className="light-gray" />
       <Button className="transparent" />
       <Button className="left-icon" />
       <Button className="right-icon" />
       <Button className="small" />
       <Button className="medium" />
       <Button className = "big" />
       <Button className = "gray-light2" />
       <Button className = "blue2" />
       <Button className = "black-light" />
       <Button className = "red" />
       <Button className = "gray-pink" />
       <Button className = "blue3" />
       <Button className = "black" />
       <Button className = "grenat" />

     
   </div>)
} 
}

function Button() {
    return (<div className="button-container">
        <button type="text" className="container-btn" >Default</button>
        </div>)
}





ReactDOM.render(<App />, document.getElementById('root'))


