import React from "react";
//import './ImportantEntries.css';
import Header from "./component/Header";
import Table from "./importantTable";
import Axios from 'axios';

let data;

export default class ImportantEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewTable: false
        };
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }
    handleRefreshClick() {
        Axios.post("http://localhost:5000/get-importantEntries" )
        .then((response) => {
            if(response.data.message) {
              console.log(response.data.message)
            }
            else {
              data=[...response.data];
              this.setState({viewTable: true });
            }
        });
    }
    render(){
        return(
            <div className="container">
                <Header/>
                {(this.state.viewTable ) ? <Table records={data}/> : 
                <div>
                    <h1>There are no entries marked as important</h1>
                    <button type="button" onClick={this.handleRefreshClick}>Check Again</button>
                </div>}
                
            </div>
        )
    }
}