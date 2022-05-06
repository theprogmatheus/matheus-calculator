import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator.js'

import './assets/css/index.css';


class Application extends React.Component {

    render() {
        return (
            <Calculator />
        );
    }

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);