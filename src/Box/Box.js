import React, { Component } from 'react'
import './Box.scss';
export default class Box extends Component {
    render() {
        return (
            <div className='Box'
                style={{
                    backgroundColor: `${this.props.color}`
                }}>
                <button className="Box__button" onClick={() => this.props.clickFunction(this.props.id)}>X</button>
            </div>
        )
    }
}
