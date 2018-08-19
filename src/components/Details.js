import React, { Component } from 'react';
import Summary from './Summary';
import ToppingsForm from './ToppingsForm';
import Total from './Total';

let sum = 0;
let selectedToppings = [];
class Details extends Component {   
    
    constructor(probs) {
        super(probs);       
        this.state = {
            stateSelectToppings:selectedToppings                             
        };        
    }
   
    onToppingClick = (topping) =>{    
        if (selectedToppings.includes(topping)) {
            var index = selectedToppings.indexOf(topping);
            selectedToppings.splice(index, 1);  
            this.setState({
                summary: selectedToppings            
            })             
            return;
        }else{
            selectedToppings.push(topping);
        }
        this.setState({
            summary: selectedToppings,
            //disPlay: sum         
         })   
    }

    addOrder = (e) =>{
        e.preventDefault();
        console.log(e.target.customerName.value)             
        var newOrder = {
            a: e.target.customerName.value,
            b: e.target.email.value
        };
        var data = new FormData();
        data.append( "json", JSON.stringify( newOrder ) );
    
        fetch('http://localhost:9000/process', {
            method: 'post',
            body: data
        });
       
        alert("You order has placed successfuly!")
    }
    render() {             
        return (   
            <form className="form" method="POST" action="" onSubmit={this.addOrder} >                
                <h1>Marks Pizza House</h1>
                <section>
                    <h2>Enter your details</h2>
                    <div >
                        <div className="details-container">
                            <div className="detail">
                                <label>NAME</label>
                                <input id="customerName" placeholder="John Smith" type="text"/>
                            </div>
                            <div className="detail">
                                <label>EMAIL</label> 
                                <input id="email" placeholder="Enter your email" type="text"/>
                            </div>
                            <div className="detail">
                                <label>CONFIRM EMAIL</label>
                                <input type="text" placeholder="Confirm your email"/>
                            </div>
                            <div className="detail">
                                <label>ADDRESS</label>
                                <input type="text" placeholder="44 Pizza Street"/>
                            </div>
                            <div className="detail">
                                <label>CONFIRM EMAIL</label>
                                <input type="text" placeholder="3000"/>
                            </div>
                            <div className="detail">
                                <label>CONTACT NUMBER</label>
                                <input type="text" placeholder="01 2345 6789"/>
                            </div>                               
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Choose your toppings</h2>
                    <ToppingsForm selectedToppings={ this.state.stateSelectToppings } onToppingClick={ this.onToppingClick} />
                </section>

                <section>
                    <h2>Summary</h2>
                    <div> 
                    <ul className="items">     
                    <Summary selectedToppings = { this.state.stateSelectToppings }/>                 
                    </ul>
                    </div>                
                    <hr/>
                    <Total selectedToppings = { this.state.stateSelectToppings }/>
                    <button type="submit">Place order</button>
                </section>                      
            </form>         
        );       
    } 
}

export default Details;
