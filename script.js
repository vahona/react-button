import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


class App extends React.Component{

    constructor(props) {
        super(props);
        

        this.handleClick = this.handleClick.bind(this)
        // this.handleHover = this.handleHover.bind(this)
    }


    handleClick() {
        e.preventDefault();
     console.log("click me");
    }


    render() {
   return (<div className = "list-button">
       <Button className="default"/>
       <Button className="gray" />
       <Button className="white"
               variant="outline" />
       <Button className="light-blue" />
       <Button className="no-border"
               variant="text" />
       <Button className="blue-no-border" />
       <Button className="blue"
              variant="disableShadow" />
       <Button className="light-gray"
               disabled />
       <Button className="transparent"
               variant="text" disabled />
       <Button className="left-icon"
               starticon="local_grocery_store"/>
       <Button className="right-icon" 
               endicon="local_grocery_store" />
       <Button className="small"
               size="sm"  />
       <Button className="medium" 
               size="md"  />
       <Button className="big"
               size="lg"  />
       <Button className = "gray-light2" 
               color="default"/>
       <Button className = "blue2"
               color="primary" />
       <Button className = "black-light"
               color="secondary" />
       <Button className = "red"
              color="danger" />
       <Button className = "gray-pink" />
       <Button className = "blue3" />
       <Button className = "black" />
       <Button className = "grenat" />
   </div>)
} 
}


function Button(props) {
  
    return (<div className="button-container">
        <button type="text" className="container-btn" >Default</button>
        </div>)
}





ReactDOM.render(<App />, document.getElementById('root'))


