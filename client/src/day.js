import React, { Component } from 'react';
import './index.css';

class DayComponent extends Component {
    constructor(){
        super()
        this.state = {
          
        }
      }
      render(){
    
        return ( 
            <div className="dayComp">
              <div className="TypeTest" id="dayName">{this.props.dayValue}</div>
              <div className="TypeTest"> 
                <div className="SolidTest">Solid </div>
                <progress id="health" value={this.props.solidTimes} max="12"></progress>
                <div className="SolidTest"> </div>
                <div className="SolidTest">{this.props.solidTimes}</div>
              </div>
              <div className="TypeTest"> 
                <div className="LiquidTest">Liquid</div>
                <progress id="health" value={this.props.liquidTimes} max="12"></progress>
                <div className="SolidTest">{this.props.liquidTimes}</div>
              </div>
            </div>
      
        )
      }
}
export default DayComponent;