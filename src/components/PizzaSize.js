import React, { Component } from 'react';
import '../styles/PizzaSize.scss';
const styles = {
    sizeSection:{
        "display": "flex",
        "width": "100%"
    },
    sizeLabel: {
        "margin": "0 0 20px",
        "fontSize": "16px",
        "color": "rgba(0,0,0,0.7)",
        "cursor": "pointer",
        "flex": "0 0 33%",
        "height": "80px",
        "position": "relative",
        "padding": "29px 0 0 100px",
        "boxSizing": "border-box"
    },
    sizeRadio: {
        "border": "0",
        "clip": "rect(0 0 0 0)",
        "height": "1px",
        "margin": "-1px",
        "overflow": "hidden",
        "padding": "0",
        "position": "absolute",
        "width": "1px"
    } 
}

function SizeTemplate(props) {
    return      <label style={styles.sizeLabel}>
                    <input  style={styles.sizeRadio} type="radio"></input>
                    <div >
                        {props.sizename} 
                        <div className ="pizza-size__plate">
                            <div className="pizza-size__pizza pizza-size__pizza--large" >
                                <div className="pizza-size__pizza__line"></div>
                                <div className="pizza-size__pizza__line"></div>
                                <div className="pizza-size__pizza__line"></div>
                                <div className="pizza-size__pizza__line"></div>
                                
                            </div>
                        </div>
                    </div>
                </label>;
               
}

class PizzaSize extends Component {   
    render() {
        return(     
            <div style={styles.sizeSection}>                                                                            
              <SizeTemplate sizename={`Large(13")`} size={13}/>
              <SizeTemplate sizename={`Medium(11")`} size={11}/>
              <SizeTemplate sizename={`Small(9")`} size={9}/>
            </div>                                         
        )
    };
}

export default PizzaSize;