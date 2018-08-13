import React, { Component } from 'react';

class Summary extends Component {   

                   
    render() {

        console.log(this.probs);
        return(


        <ul className="items">
            <li>
                <span className="item">Pizza</span>
                <span className="price">$9.99</span>
            </li>
            <ul>
                <li>
                    <span className="item">Onion</span>
                    <span className="price">$0.99</span>
                </li>
                <li>
                    <span className="item">Mushroom</span>
                    <span className="price">$0.99</span>
                </li>
                <li>
                    <span className="item">Bacon</span>
                    <span  className="price">$0.99</span>                
                </li>
                <li>
                    <span className="item">Anchovy</span>
                    <span  className="price">$0.99</span>                  
                    
                </li>
            </ul>
        </ul>
        )
    
    
    };

}

export default Summary;