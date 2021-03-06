import REACT, { Component } from 'react';
import REACTDOM from 'react-dom';
import MainCSS from './main.module.css';
import sleeping from './images/sleeping.png';
import eating from './images/feedingtip.png';
import diaper from './images/dirtydiaper.png';
import bottle from './images/bottle.png';
import babyfood from './images/babyfood.png';
import toughsleep from './images/sleep.png';

export class Tips extends Component{
    prevClick = () => {
        var current_element = document.getElementsByClassName(MainCSS.tipon);
        var current_index = current_element[0].value;
        var index = current_index - 1;
        if(index < 1){
            document.getElementById('prev').disabled = true;
        }else{
            document.getElementById(current_index.toString()).setAttribute("class", MainCSS.tipoff);
            document.getElementById(index.toString()).setAttribute("class", MainCSS.tipon);
            if(document.getElementById('next').disabled == true){
                document.getElementById('next').disabled = false;
            }
            if((index) == 1){
                document.getElementById('prev').disabled = true;
            }
        }
    }

    nextClick = () => {
        var current_element = document.getElementsByClassName(MainCSS.tipon);
        var current_index = current_element[0].value;
        var index = current_index + 1;
        if(index == 7){
            document.getElementById('next').disabled = true;
        }else{
            document.getElementById(current_index.toString()).setAttribute("class", MainCSS.tipoff);
            document.getElementById(index.toString()).setAttribute("class", MainCSS.tipon);
            if(document.getElementById('prev').disabled == true){
                document.getElementById('prev').disabled = false;
            }
            if((index) == 6){
                document.getElementById('next').disabled = true;
            }
        }
    }

    render(){
        return(
        <div style={{backgroundColor: "white", width: "500px", borderRadius: "10px"}}>
            <h1 style={{textAlign: "center"}}>Care Tips</h1>
            <div>
                <ul>
                    <li id="1" value={1} className={MainCSS.tipon}>
                        <img id="tip_image" src={sleeping} className={MainCSS.tipimage} alt="no image"/>
                        <section id="tiptext">
                            Newborns typically sleep for about 16 hours a day. 
                            They can be expected to sleep in periods of 2-4 hours. 
                        </section>
                    </li>
                    <li id="2" value={2} className={MainCSS.tipoff}>
                        <img id="tip_image" src={eating} className={MainCSS.tipimage} alt="no image"/>
                        <section id="tiptext">
                            A newborn will need to be feed every 2-3 hours. 
                            Here are possible signs that your baby is hungry: 
                            <ul>
                                <li>Crying.</li> 
                                <li>Put fingers in his or her mouth.</li>
                                <li>Making sucking noises.</li>
                            </ul>
                        </section>
                    </li>
                    <li id="3" value={3} className={MainCSS.tipoff}>
                        <img id="tip_image" src={diaper} className={MainCSS.tipimage} alt="no image"/>
                        <section id="tiptext">
                            Have plenty of diapers ready! <br/>
                            Your baby will need at least <b>10</b> changes a day!
                        </section>
                    </li>
                    <li id="4" value={4} className={MainCSS.tipoff}>
                        <img id="tip_image" src={bottle} className={MainCSS.tipimage} alt="no image"/>
                        <section id="tiptext">
                            Infants should be having breast milk for about 6 months
                        </section>
                    </li>
                    <li id="5" value={5} className={MainCSS.tipoff}>
                        <img id="tip_image" src={babyfood} className={MainCSS.tipimage} alt="no image"/>
                        <section id="tiptext">
                            From 6 months on start introducing baby food to their diet!
                            Baby food is pureed and strained food that's easier to eat than solids.
                            They should eat baby food up until a year old. 
                        </section>
                    </li>
                    <li id="6" value={6} className={MainCSS.tipoff}>
                        <img id="tip_image" src={toughsleep} className={MainCSS.tipimage} alt="no image"/>
                        <section id="tiptext">
                            Having trouble putting the baby to sleep? Try rocking the baby.
                            You can also try a pacifier or white noise like radio static. 
                            You can also try swaddling them to help them feel comforted.
                        </section>
                    </li>
                </ul>
            </div>
            <div style={{margin: "auto", marginLeft: "140px", display: "flex"}}>
                <button id="prev" className={MainCSS.prevtip} onClick={this.prevClick}>Previous</button>
                <button id="next" className={MainCSS.nexttip} onClick={this.nextClick}>Next</button>
            </div>
        </div>
        );
    }
}