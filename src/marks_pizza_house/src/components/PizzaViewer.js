import React, { Component } from 'react';
class PizzaViewer extends Component {
    render() {
        return (
                <section className="pizza-viewer">
                    <div className="pizza">
                        <div className="pizza-board"> 
                            <img src={require('../assets/board.svg')} alt="Pizza board"/>
                        </div>
                        <div className="pizza-base">
                            <img src={require('../assets/base.svg')} alt="Pizza base"/>
                        </div>
                        <div className="pizza-toppings">              
                            <img src={require('../assets/toppings/anchovies.svg')} alt="Anchovies"/>
                            <img src={require('../assets/toppings/bacons.svg')} alt="Bacons"/>
                            <img src={require('../assets/toppings/basils.svg')} alt="Basils"/>
                            <img src={require('../assets/toppings/chilies.svg')} alt="Chilies"/>
                            <img src={require('../assets/toppings/mozzarellas.svg')} alt="Mozzarellas"/>
                            <img src={require('../assets/toppings/mushrooms.svg')} alt="Mushrooms"/>
                            <img src={require('../assets/toppings/olives.svg')} alt="Olives"/>
                            <img src={require('../assets/toppings/onions.svg')} alt="Onions"/>
                            <img src={require('../assets/toppings/peppers.svg')} alt="Peppers"/>
                        </div>
                    </div>
                </section>
        );
    }
}

export default PizzaViewer;
