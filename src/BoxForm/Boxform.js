import React, { Component } from 'react'
import "./Boxform.scss";

export default class Boxform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            errors: {}
        }
    }
    handleChange = (e) => {
        let newColor = e.target.value;
        this.setState({
            color: newColor
        })
    }
    addColor = (e) => {
        e.preventDefault();
        if(!this.validateForm()){
            return;
        }
        this.props.handleSubmit(this.state.color)
        this.setState({color: ''});
    }
    validateForm = (e) => {
        const errors = {}
        // Checks if the color is entered
        if(this.state.color.length === 0){
            errors.color = 'You must enter a color.'
        }
        // Counts the number of keys in the object and if the length is grater than zero it throws and error
        if(Object.keys(errors).length > 0){
            this.setState({errors});
            return false
        }
        return true
    }
    render() {
        // Creates an error element when called
        const errorMessage =(message) => (<span className="BoxForm__error">
            {message}
          </span>)
        return (
            <div className='BoxForm'>
                <form className='BoxForm__form' onSubmit={this.addColor} action="">
                    <label htmlFor="color" className='BoxForm__label'>Choose color</label>
                    <input type="text" name="color" id="color" onKeyDown={() =>delete this.state.errors.color} className="BoxForm__input" onChange={this.handleChange} value={this.state.color} />
                    {this.state.errors.color?errorMessage(this.state.errors.color):''}
                    <button type="submit" className='BoxForm__button'  >Add box</button>
                </form>
            </div>
        )
    }
}
