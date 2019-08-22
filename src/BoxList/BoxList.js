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
    dragStart = (e, index) => {
        console.log(e.target.parentNode)
        console.log(index)
        this.draggedItem = this.state.boxes[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target);
        e.dataTransfer.setDragImage(e.target, 20, 20);
      };
    dragEnd = (e, index) => {
        this.draggedIdx = null;
      };
    dragOver = (index) => {
        const draggedOverItem = this.state.boxes[index];

        // if the item is dragged over itself, ignore
        if (this.draggedItem === draggedOverItem) {
        return;
        }

        // filter out the currently dragged item
        let boxes = this.state.boxes.filter(item => item !== this.draggedItem);

        // add the dragged item after the dragged over item
        boxes.splice(index, 0, this.draggedItem);

        this.setState({ boxes });
      };
    addBox = (color, evt) => {
        let newBox = { key: UUID.v4(), id: UUID.v4(), color: color };
        let boxes = [...this.state.boxes, newBox]
        this.setState({
            boxes: boxes
        })
    }
    shuffle = () => {
        let boxes = this.state.boxes
        boxes = boxes.sort(() => Math.random() - 0.5)
        this.setState({
            boxes
        })
    }
    removeAll = () => {
        this.setState({
            boxes: []
        })
    }
    render() {
        return (
            <div className='BoxList'>
                <button type="button" className='BoxForm__button'  onClick={this.shuffle}>Shuffle boxes</button>
                <button type="button" className='BoxForm__button'  onClick={this.removeAll}>Remove all</button>
                <div className="BoxList__boxes">
                    {this.state.boxes.map((box, index) => {
                        return <Box key={box.key} id={box.id} index={index} color={box.color} clickFunction={this.removeBox} dragStart={this.dragStart} dragOver={this.dragOver}/>
                    })}
                </div>
                <Boxform handleSubmit={this.addBox} />
            </div>
        )
    }
}
