import React from 'react';
import Display from './Display.js'
import Keyboard from './Keyboard.js'
import { create, all } from 'mathjs'

const config = {}
const math = create(all, config)

const allowedKeys = ['+', '-', '/', '*', '.', ',', '%', '(', ')', '[', ']'];


class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: null,
            history: null
        };
        this.onKeyEvent = this.onKeyEvent.bind(this);
    }

    onKeyEvent(event) {
        switch (event.key) {

            case 'Escape':
                this.clearHistory();
                this.clearInput();
                break;

            case 'Enter':
            case '=':
                this.calculate();
                break;

            case 'Backspace':
            case 'Delete':
                this.backSpace();
                break;

            default:
                if (!isNaN(event.key) || allowedKeys.includes(event.key))
                    this.input(event.key.replace(",", "."));
                break;
        }
    }



    input = (input) => {
        this.setState({
            input: this.state.input === null ? input : this.state.input + input + ''
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
        this.setState({ input: (math.evaluate(this.state.input) + '') })
    }

    clearInput = () => {
        this.setState({ input: null })
    }

    clearHistory = () => {
        this.setState({ history: null })
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyEvent, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyEvent, false);
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
            <div className='calculator' style={style}  >
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