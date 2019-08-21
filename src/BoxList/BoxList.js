import React, { Component } from 'react'
import "./Boxlist.scss";
import Box from "../Box/Box";
import Boxform from "../BoxForm/Boxform";
import { default as UUID } from "uuid";

export default class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes:
                [
                    { key: UUID.v4(), id: UUID.v4(), color: 'black' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'red' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'green' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'pink' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'navy' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'rebeccapurple' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'purple' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'pink' },
                    { key: UUID.v4(), id: UUID.v4(), color: 'yellow' },
                ]
        }
    }
    removeBox = (id) => {
        const boxes = this.state.boxes.filter(box => box.id !== id);
        this.setState({ boxes: boxes })
    }
    addBox = (color, evt) => {
        let newBox = { key: UUID.v4(), id: UUID.v4(), color: color };
        let boxes = [...this.state.boxes, newBox]
        this.setState({
            boxes: boxes
        })
    }
    render() {
        return (
            <div className='BoxList'>
                <div className="BoxList__boxes">
                    {this.state.boxes.map(box => {
                        return <Box key={box.key} id={box.id} color={box.color} clickFunction={this.removeBox} />
                    })}
                </div>
                <Boxform handleSubmit={this.addBox} />
            </div>
        )
    }
}
