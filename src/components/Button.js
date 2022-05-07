import React from 'react'


class Button extends React.Component {

    render() {
        const style = {
            width: '25%',
            height: '65px',
            backgroundColor: this.props.button.backgroundColor == null ? '#080808' : this.props.button.backgroundColor,
            color: 'white'
        };

        return (
            <button className='button' style={style} onClick={this.props.button.action}>
                {this.props.button.display}
            </button>
        )
    }
}

export default Button