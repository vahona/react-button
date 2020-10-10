import React from 'react'









function Button(props) {

    let decorations = '';

    if (props.color) {
        decorations = props.color
    }
    if (props.size) {
        decorations = props.size
    }

    if (props.variant) {
        decorations = props.variant
    }
    if (props.disabled) {
        decorations = props.disabled
    }

    if (props.starticon) {
        decorations = props.starticon
    }



    return (<div className="button-container">
        <button type="button" className={decorations}> Default </button>
    </div>)

}

export default Button