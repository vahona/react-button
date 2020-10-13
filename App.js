import React from 'react'
import Button from './Button.js'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {

        return (<div className="list-button" >
            <div>
            <Button />
            </div>
            <div>
            <Button />
            </div>
            <div>
            <Button variant="outline" />
            </div>
            <div>
            <Button variant="text" />
            </div>
            <div>
            <Button disableShadow />
            </div>
            <div>
            <Button disabled />
            </div>
            <div>
            <Button variant="text" disabled />
            </div>
            <div>
            <Button starticon="local_grocery_store"> </Button>
            </div>
            <div>
            <Button endicon="local_grocery_store"></Button>
            </div>
            <div>
            <Button size="sm" />
            </div>
            <div>
            <Button size="md" />
            </div>
            <div>
            <Button size="lg" />
            </div>
            <Button color="default" />
            <Button color="primary" >Primary</Button>
            <Button color="secondary" >Secondary</Button>
            <Button color="danger" />
        </div>)
    }
}

export default App