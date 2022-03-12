import React from "react";
//import './ImportantEntries.css';
import Header from "./component/Header";
import Table from "./importantTable";

export default class ImportantEntries extends React.Component {
    render(){
        return(
            <h1 className="container">
                <Header/>
                <Table/>
            </h1>
        )
    }
}

