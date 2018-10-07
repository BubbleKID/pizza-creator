import React, { Component } from 'react';

class ToppingsForm extends Component {    
    render() {
        let totalPrice = 0;
        let displayPrice = 0;

        this.props.selectedSize.map(pizza=>
            {   
                totalPrice += pizza.price;
                displayPrice = totalPrice.toFixed(2);        
                return  displayPrice ;               
            }
        )
        
        this.props.selectedToppings.map(topping=>
            {   
                totalPrice += topping.price;
                displayPrice = totalPrice.toFixed(2);        
                return  displayPrice ;               
            }
        )       
        return(   
            <p className="total-price">Total:$ { displayPrice } </p>
        )
    };
}

export default ToppingsForm ;