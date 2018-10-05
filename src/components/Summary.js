import React, { Component } from 'react';
class Summary extends Component {           
    render() {
        return(     
            <div>   
                 
                {                             
                    this.props.selectedSize.map(
                        pizza=>{
                            //console.log(pizza);
                            return(
                                <li key={pizza.name}>
                                    <span>{pizza.size}  pizza</span>
                                    <span className="price">{"$" + pizza.price}</span>             
                                </li>
                            )
                        }      
                    ) 
                }                                                                              
                {                    
                    this.props.selectedToppings.map(topping => {
                        return (                                                
                                <li className="summary" key={topping.name}>                                   
                                    <span className="item" >{topping.name}</span>
                                    <span className="price">{"$" + topping.price}</span>                
                                </li>                                                                                       
                        );
                    }) 
                }   
                            
            </div>                                         
        )
    };
}

export default Summary;