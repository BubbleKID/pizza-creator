import React, { Component } from 'react';
import Toppings from './Toppings';

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
                        <Toppings />  
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
