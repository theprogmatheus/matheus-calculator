import React from 'react';
import Display from './Display.js'
import Keyboard from './Keyboard.js'

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: null,
            history: null
        };
    }

    input = (input) => {
        this.setState({
            input: this.state.input === null ? input : this.state.input + input
        })
    }

    backSpace = () => {
        if (!(this.state.input === null)) {


            let newInput = this.state.input.substring(0, this.state.input.length - 1);

            if (newInput.length === 0)
                newInput = null;


            this.setState({
                input: newInput
            })
        }
    }

    calculate = () => {

    }

    clearInput = () => {
        this.setState({ input: null })
    }

    clearHistory = () => {
        this.setState({ history: null })
    }

    render() {

        const style = {
            margin: 'auto',
            padding: '5px',
            minWidth: '350px',
            minHeight: '540px',
            width: '28%',
            height: '50%',
            border: '1px solid gray',
            backgroundColor: '#1f1f1f',
            borderRadius: '5px',
        }

        return (
            <div onKeyDown={() => { console.log('1') }} className='calculator' style={style}>
                <Display state={this.state} />
                <Keyboard state={this.state} functions={{

                    input: this.input,
                    clearInput: this.clearInput,
                    clearHistory: this.clearHistory,
                    backSpace: this.backSpace,
                    calculate: this.calculate

                }} />
            </div>
        )

    }

}

export default Calculator