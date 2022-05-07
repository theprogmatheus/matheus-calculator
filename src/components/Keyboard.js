import React from 'react'
import Button from './Button.js'

class Keyboard extends React.Component {

    createButton(display, backgroundColor, action = () => { this.props.functions.input(display) }) {
        return {
            display: display,
            backgroundColor: backgroundColor,
            action: action
        }
    }

    render() {

        const style = {}

        return (
            <div className='keyboard' style={style}>

                <Button button={this.createButton('%')} />
                <Button button={this.createButton('CE', null, () => {
                    this.props.functions.clearInput()
                })} />

                <Button button={this.createButton('C', null, () => {
                    this.props.functions.clearHistory()
                    this.props.functions.clearInput()
                })} />

                <Button button={this.createButton('DEL', null, () => {
                    this.props.functions.backSpace()
                })} />

                <Button button={this.createButton('7', '#1f1f1f')} />
                <Button button={this.createButton('8', '#1f1f1f')} />
                <Button button={this.createButton('9', '#1f1f1f')} />
                <Button button={this.createButton('/')} />


                <Button button={this.createButton('4', '#1f1f1f')} />
                <Button button={this.createButton('5', '#1f1f1f')} />
                <Button button={this.createButton('6', '#1f1f1f')} />
                <Button button={this.createButton('*')} />

                <Button button={this.createButton('1', '#1f1f1f')} />
                <Button button={this.createButton('2', '#1f1f1f')} />
                <Button button={this.createButton('3', '#1f1f1f')} />
                <Button button={this.createButton('+')} />

                <Button button={this.createButton('.')} />
                <Button button={this.createButton('0', '#1f1f1f')} />
                <Button button={this.createButton('=', null, ()=>{
                    this.props.functions.calculate()
                })} />
                <Button button={this.createButton('-')} />
            </div>
        )
    }
}

export default Keyboard