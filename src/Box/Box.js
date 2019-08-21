import React, { Component } from 'react'
import './Box.scss';
export default class Box extends Component {
    dragEnd = (e) => {
        // this.props.dragFunction(this.props.id)
        // e.dataTransfer.setData("text/html", e.parentNode) 
        // e.dataTransfer.setDragImage(e.parentNode, 20, 20)
    }
    render() {
        return (
            <div className='Box' draggable="true" onDragStart={e =>this.props.dragStart(e,  this.props.index) } onDragEnd={() => this.props.dragEnd } onDragOver={() => this.props.dragOver(this.props.index)}
                style={{
                    backgroundColor: `${this.props.color}`
                }}>
                <button className="Box__button" onClick={() => this.props.clickFunction(this.props.id)}>X</button>
            </div>
        )
    }
}
