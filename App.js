import React from 'react'
import Button from './Button.js'

class App extends React.Component {

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
            <Button starticon="local_grocery_store" />
            <Button endicon="local_grocery_store" />
            <Button size="sm" />
            <Button size="md" />
            <Button size="lg" />
            <Button color="default" />
            <Button color="primary" />
            <Button color="secondary" />
            <Button color="danger" />
        </div>)
    }
}

export default App