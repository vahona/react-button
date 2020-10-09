import React from 'react'
import ReactDOM from 'react-dom'
import './style.css';





class App extends React.Component{

    constructor(props) {
        super(props);
 
    }


   

    render() {
        
        return (<div className="list-button" >

       <Button />
       <Button />
       <Button variant="outline" />
       <Button />
       <Button variant="text" />
       <Button />
       <Button variant="disableShadow" />
       <Button disabled />
       <Button variant="text" disabled />
       <Button starticon="local_grocery_store"/>
       <Button endicon="local_grocery_store" />
       <Button size="sm"  />
       <Button size="md"  />
       <Button size="lg"  />
       <Button color="default"/>
       <Button color="primary" />
       <Button color="secondary" />
       <Button color="danger" />
   </div>)
} 
}



function Button(props) {

    let decorations = '';

    if(props.color) {
       decorations = props.color
    }
    if (props.size) {
        decorations = props.size
    }

    if (props.variant){
        decorations = props.variant
    }

    return (<div className="button-container">
        <button type="button" className={decorations}> Default </button>
        </div>)

  
}


ReactDOM.render(<App />, document.getElementById('root'))


