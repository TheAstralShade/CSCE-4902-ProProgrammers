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
            <div>
            <div class="TypeTest">{this.props.dayValue}</div>
            <div class="TypeTest"> 
              <div class="SolidTest">Solid </div>
              <progress id="health" value={this.props.solidTimes} max="12"></progress>
              <div class="SolidTest"> </div>
              <div class="SolidTest">{this.props.solidTimes}</div>
            </div>
            <div class="TypeTest"> 
              <div class="LiquidTest">Liquid</div>
              <progress id="health" value={this.props.liquidTimes} max="12"></progress>
              <div class="SolidTest">{this.props.liquidTimes}</div>
            </div>
            </div>
      
        )
      }
}
export default DayComponent;