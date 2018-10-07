import React, { Component } from 'react';
class PizzaViewer extends Component {
    render() {
        return(
            <section className="pizza-viewer">
                <div className="pizza">
                    <div className="pizza-board"> 
                        <img src="assets/board.svg" alt="Pizza board"/>
                    </div>
                    <div className="pizza-base">
                        <img src="assets/base.svg" alt="Pizza base"/>
                    </div>
                    <div className="pizza-toppings">              
                        <img src="assets/toppings/anchovies.svg" alt="Anchovies"/>
                        <img src="assets/toppings/bacons.svg" alt="Bacons"/>
                        <img src="assets/toppings/basils.svg" alt="Basils"/>
                        <img src="assets/toppings/chilies.svg" alt="Chilies"/>
                        <img src="assets/toppings/mozzarellas.svg" alt="Mozzarellas"/>
                        <img src="assets/toppings/mushrooms.svg" alt="Mushrooms"/>
                        <img src="assets/toppings/olives.svg" alt="Olives"/>
                        <img src="assets/toppings/onions.svg" alt="Onions"/>
                        <img src="assets/toppings/peppers.svg" alt="Peppers"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default PizzaViewer;
