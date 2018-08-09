import React, { Component } from 'react';
class Details extends Component { 
    render() {
        return ( 
            <section className="form">
                <h1>Mark's Pizza House</h1>
                <section>
                    <h2>Enter your details</h2>
                    <form>
                        <div className="details-container">
                            <div className="detail">
                                <label>NAME</label>
                                <input type="text"/>
                            </div>
                            <div className="detail">
                                <label>EMAIL</label> 
                                <input type="text"/>
                            </div>
                            <div className="detail">
                                <label>CONFIRM EMAIL</label>
                                <input type="text"/>
                            </div>
                            <div className="detail">
                                <label>ADDRESS</label>
                                <input type="text"/>
                            </div>
                            <div className="detail">
                                <label>CONFIRM EMAIL</label>
                                <input type="text"/>
                            </div>
                            <div className="detail">
                                    <label>CONTACT NUMBER</label>
                                    <input type="text"/>
                            </div>                               
                        </div>
                    </form>
                </section>

                <section>
                    <h2>Choose your toppings</h2>
                    <div className="toppings-container">
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/anchovy.svg')} alt="Anchovy" /><span>Anchovy</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/bacon.svg')} alt="Bacon" /><span>Bacon</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/basil.svg')} alt="Basil" /><span>Basil</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/chili.svg')} alt="Chili" /><span>Chili</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/mozzarella.svg')} alt="Mozzarella" /><span>Mozzarella</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/mushroom.svg')} alt="" /><span>Mushroom</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/olive.svg')} alt=""/><span>Olive</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/onion.svg')} alt=""/><span>Onion</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/pepper.svg')} alt=""/><span>Pepper</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/pepperoni.svg')} alt=""/><span>Pepperoni</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/peppers.svg')} alt=""/><span>Peppers</span>
                        </button>
                        <button className="topping" type="button">
                            <img src={require('../assets/toppings/sweetcorn.svg')} alt=""/><span>Sweetcorn</span>
                        </button>
                    </div>
                </section>


                 <section>
                    <h2>Summary</h2>
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
                                <span  className="price">$0.99</span>                    <span >$0.99</span>
                            </li>
                            <li>
                                <span className="item">Anchovy</span>
                                <span  className="price">$0.99</span>                    <span >$0.99</span>
                            </li>
                        </ul>
                    </ul>
                    <hr/>
                    <p className="total-price">Total:$13.86</p>
                    <button type="submit">Place order</button>
                </section>
            </section>            
        );
    }
}

export default Details;
