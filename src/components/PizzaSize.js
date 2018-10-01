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
    return  <label className="pizza-size__item"   >
                <input  style={styles.sizeRadio} type="radio"></input>
                <div >
                    {props.sizename} 
                    <div className ="pizza-size__plate" onClick={() => props.onSizeClick()} >
                        <div className={`pizza-size__pizza pizza-size__pizza--${props.size}`} >
                            <div className="pizza-size__pizza__line"></div>
                            <div className="pizza-size__pizza__line"></div>
                            <div className="pizza-size__pizza__line"></div>
                            <div className="pizza-size__pizza__line"></div>              
                        </div>
                    </div>
                </div>
            </label>           
}

class PizzaSize extends Component {   
    render() {
        return(     
            <div style={styles.sizeSection}>                                                                            
              <SizeTemplate sizename={`Large(13")`} size={"large"} onSizeClick={() => this.props.onSizeClick("large")}/>
              <SizeTemplate sizename={`Medium(11")`} size={"medium"} onSizeClick={() => this.props.onSizeClick("medium")}/>
              <SizeTemplate sizename={`Small(9")`} size={"small"} onSizeClick={() => this.props.onSizeClick("small")}/>
            </div>                                         
        )
    };
}

export default PizzaSize;