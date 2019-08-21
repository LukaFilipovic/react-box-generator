import React, { Component } from 'react'
import "./Boxform.scss";

export default class Boxform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        }
    }
    handleChange = (e) => {
        let newColor = e.target.value;
        this.setState({
            color: newColor
        })
    }
    render() {
        return (
            <div className='BoxForm'>
                <form className='BoxForm__form' onSubmit={(e) => {e.preventDefault();this.props.handleSubmit(this.state.color)}} action="">
                    <label htmlFor="color" className='BoxForm__label'>Choose color</label>
                    <input type="text" name="color" id="color" className="BoxForm__input" onChange={this.handleChange} value={this.state.color} />
                    <button type="submit" className='BoxForm__button'  >Add box</button>
                </form>
            </div>
        )
    }
}
