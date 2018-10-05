import React, { Component } from 'react';
import Summary from './Summary';
import PizzaSize from './PizzaSize';
import ToppingsForm from './ToppingsForm';
import Total from './Total';
import 'font-awesome/css/font-awesome.min.css';

const styles = {
    addPizzaBtn: {
        background:"none",
        cursor: "pointer",
        border: "none",
        color: "#97C747",
        fontSize: "15px",
        outline: "none",
        padding: "10px 15px",
        float: "right"
    },
    creatorHeader: {
        fontSize: "16px",
        padding: "10px 15px",
        color: "rgba(0,0,0,0.6)",
        position: "relative",
        cursor: "pointer",
        borderBottom: "1px solid rgba(0,0,0,0.1)"

    },
    creatorH3 : {
        color: "#6E7790",
        fontSize: "16px",
        position: "relative",
        marginBottom: "10px"
    },
    checkIcon:{
        "color": "#98C550"
    }
};     

let selectedToppings = [];
let selectedSize = [{
    "name" : "Small(9 inch)",
    "size": "small",
    "price":  9.99
}];

class Details extends Component {   
    
    constructor(probs) {
        super(probs);       
        this.state = {
            stateSelectToppings:selectedToppings,
            stateSelectSize:selectedSize                              
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
         })   
    }

    onSizeClick = (pizza) =>{  
        selectedSize.splice(0,selectedSize.length);;
        selectedSize.push(pizza);
        this.setState({
            summary: selectedSize            
        })             
    }

    addOrder = (e) =>{
        // e.preventDefault();                    
        // var newOrder = {
        //     a: e.target.customerName.value,
        //     b: e.target.email.value
        // };
        // var data = new FormData();
        // data.append( "json", JSON.stringify( newOrder ) );
    
        // fetch('http://localhost:9000/process', {
        //     method: 'post',
        //     body: data
        // });
        // alert("You order has placed successfuly!")
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
                    <h2>Choose your pizzas 
                        <button style={ styles.addPizzaBtn } type="button">
                            <i className="fa fa-plus"></i>Add pizza
                        </button>
                    </h2>
                    <div>
                        <div style={ styles.creatorHeader }>
                            <i className="fa fa-chevron-up"></i>Pizza 1
                            <i className="fa fa-check" style={styles.checkIcon}></i>
                        </div>
                        <h3 style={ styles.creatorH3 }>Select the size</h3>
                        <PizzaSize selectedSize = {this.state.stateSelectSize } onSizeClick={ this.onSizeClick } />
                        <h3 style={ styles.creatorH3 }>Choose your toppings</h3>
                        <ToppingsForm selectedToppings={ this.state.stateSelectToppings } onToppingClick={ this.onToppingClick} />
                    </div>
                   
                </section>

                <section>
                    <h2>Summary</h2>
                    <div> 
                    <ul className="items">     
                    <Summary selectedToppings = { this.state.stateSelectToppings } selectedSize = {this.state.stateSelectSize } />                 
                    </ul>
                    </div>                
                    <hr/>
                    <Total selectedToppings = { this.state.stateSelectToppings } selectedSize = {this.state.stateSelectSize }/>
                    <button type="submit">Place order</button>
                </section>                      
            </form>         
        );       
    } 
}

export default Details;
