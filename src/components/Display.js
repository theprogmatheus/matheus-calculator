import React from 'react'

class Display extends React.Component {

    render() {

        const style = {
            minHeight: '250px',
            textAlign: 'left',
            position: 'relative',
            padding: '0px'
        }
        
        const inputStyle = {
            fontSize: '3.5em',
            textAlign: 'right',
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            margin: '10px'
        }




        return (
            <div style={style}>
                <p style={inputStyle}>{this.props.state.input === null ? 0 : this.props.state.input}</p>
            </div>
        )
    }


}
export default Display