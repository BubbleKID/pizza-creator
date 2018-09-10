import React, { Component } from 'react';
import allToppings from '../data/toppings.json';
class ToppingsForm extends Component {           
    render() {
        return(     
            <div className="toppings-container">  
                {   
                    allToppings.map(topping => {
                        return (
                            <label 
                                key={topping.name}  
                                className={`topping ${this.props.selectedToppings.includes(topping) && 'active'}`} 
                                type="button" 
                                onClick={() => this.props.onToppingClick(topping)}  
                                id={topping.name}
                            >                
                                <img  src={'assets/toppings/'+ topping.labelImage} alt={topping.name} /><span>{topping.name}</span>                   
                            </label>
                        );
                    })
                }                 
            </div>                                    
        )
    };
}

export default ToppingsForm ;