import React from 'react'; // import react module
import screen from './screen'; // Import our screen component from this directory
import button from './button'; // Import our button component from this directory

// create a class which extends react component
class chungus extends React.Component {
    constructor() {
        super();
        // set our default state
        this.state = {
                question: '',
                answer: ''
            }
            // Bind our handleClick method (sets 'this' explicitly to refer to this componenent)
            // We did this because 'this' would refer to the source of the click events
        this.handleClick = this.handleClick.bind(this);
    }

    // Render function to creat component to be rendered on the DOM.
    // This method must return a single parent element as you can see here. 
    // The component is wrapped around () to make it a single expression.
    render() {
            return ( <
                div className = "frame" >
                <
                div className = "calculator-title" >
                THE FUCKULATOR <
                /div> <
                Screen question = { this.state.question }
                answer = { this.state.answer }
                /> <
                div className = "button-row" >
                <
                Button label = { '1' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '2' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '3' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '4' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '-' }
                handleClick = { this.handleClick }
                type = 'action' / >
                <
                Button label = { '+' }
                handleClick = { this.handleClick }
                type = 'action' / >
                <
                /div> <
                div className = "button-row" >
                <
                Button label = { '5' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '6' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '7' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '8' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '*' }
                handleClick = { this.handleClick }
                type = 'action' / >
                <
                Button label = { '/' }
                handleClick = { this.handleClick }
                type = 'action' / >
                <
                /div> <
                div className = "button-row" >
                <
                Button label = { '9' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '.' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { '0' }
                handleClick = { this.handleClick }
                type = 'input' / >
                <
                Button label = { 'Cls' }
                handleClick = { this.handleClick }
                type = 'action' / >
                <
                Button label = { '=' }
                handleClick = { this.handleClick }
                type = 'action' / >
                <
                /div> < /
                div >
            );
        }
        // our method to handle all click events from our buttons
    handleClick(event) {
        const value = event.target.value; // get the value from the target element (button)
        switch (value) {
            case '=':
                { // if it's an equal sign, use the eval module to evaluate the question
                    // convert the answer (in number) to String
                    const answer = eval(this.state.question).toString();
                    // update answer in our state.
                    this.setState({ answer });
                    break;
                }
            case 'Cls':
                {
                    // if it's the Cls sign, just clean our question and answer in the state
                    this.setState({ question: '', answer: '' });
                    break;
                }
            default:
                {
                    // for every other commmand, update the answer in the state
                    this.setState({ question: this.state.question += value })
                    break;
                }
        }
    }
}

// export our frame component. To be used in our client/index.js file
export default chungus;
