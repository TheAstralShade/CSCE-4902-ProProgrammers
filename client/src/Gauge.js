import REACT, { Component } from 'react';
import REACTDOM from 'react-dom';
import MainCSS from './main.module.css';
import circle from './images/circle.svg';
import warning from './images/warning.png';
import emergency from './images/emergency.png';
import good from './images/good.png';


export class Health extends Component{
    setColor(){
        var i = ((this.props.grade) / (780)) * 100;
        if(i >= 70){
            return "red";
        }else if(i >= 40){
            return "yellow";
        }else{
            return "#32a83c";
        }
    }

    setStatus(){
        var i = ((this.props.grade) / (780)) * 100;
        if(i >= 70){
            return emergency;
        }else if(i >= 40){
            return warning;
        }else{
            return good;
        }
    }

    render(){
        return(
            <div height="300" width="300" style={{position: "relative"}}>
                <div className={MainCSS.outer_circle}>
                    <svg xmlns={circle} fill="#24398f" height="280" width="280">
                        <circle cx="140" cy="140" r="100" transform="rotate(-90)" 
                        style={{transformOrigin: "center", stroke: this.setColor(),
                             fill: "#off21w", strokeWidth: "20",strokeDasharray: "780", 
                              strokeDashoffset: this.props.grade, justifyContent: "center"}}/>
                    </svg>
                </div>
                <img src={this.props.src} className={MainCSS.health_image}/>
                <img src={this.setStatus()} className={MainCSS.notification}/>
            </div>
        );
    }
}

//<img src={this.props.src} height="50" width="50" style={{backgroundColor: "blue"}}/>
/**/