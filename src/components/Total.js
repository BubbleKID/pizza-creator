import React, { Component } from 'react';

class ToppingsForm extends Component {    
    render() {
        let totalPrice = 9.99;
        let displayPrice = totalPrice.toFixed(2);
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