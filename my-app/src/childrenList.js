import REACT, { Component } from 'react';
import REACTDOM from 'react-dom';
import MainCSS from './main.module.css';

export class ChildrenList extends Component{
    constructor(props){
        super(props);
        const children = [
            "child1", "child2", "child3"
        ];
        const list = children.map((child) => <option>{child}</option>);
        this.state = {
            listOfChildren : list
        };
    }
    render(){
        return(
            <div style={{display: "block", marginLeft: "40px"}}>
                <select>
                    {this.state.listOfChildren}
                </select>
            </div>
        );
    }
}

//<h1 style={{marginBottom: "10px", marginRight: "15px", fontSize: "20px", color: "white"}}>Children</h1>