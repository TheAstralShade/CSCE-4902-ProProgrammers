import React from 'react';
import './NavBar.css';
import house from './images/house.png';

export class NavBar extends React.Component{

    render(){
        return(
            <div >
                <h1>Baby Tracker</h1>
                <div className="home view">
                    Main Menu
                    <br></br>
                    <img source={house} alt="" width="40px" height="40px"></img>
                </div>
                <div className="feeding view">Feeding</div>
                <div className="restroom view">Restroom</div>
                <div className="sleep view">Sleep</div>
            </div>
        );
    }
}