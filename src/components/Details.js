import React, { Component } from 'react';
import toppings from '../data/toppings.json';
let sum = 0;
let selectedToppings = [];
class Details extends Component {   
    
    constructor(probs) {
        super(probs);       
        this.state = {
            summary:selectedToppings,
            toppings2:toppings                      
        };        
    }
   
    onToppingClick = (e) =>{  
        let name = e.currentTarget.id;
        let price = this.state.toppings2;
        let offset = price.find(item => item.name === name).price*100;
      
        if (selectedToppings.includes(name)) {
            var index = selectedToppings.indexOf(name);
            selectedToppings.splice(index, 1);  
            this.setState({
                summary: selectedToppings            
             })            
            e.currentTarget.classList.remove('active');
            sum-= parseFloat(offset);
            //console.log(sum);      
            return;
        }
        selectedToppings.push(name);
        sum += parseFloat(offset);
        this.setState({
            summary: selectedToppings          
         })  
        e.currentTarget.classList.add('active');
        //console.log(sum); 
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
                <h1>Mark's Pizza House</h1>
                <section>
                    <h2>Enter your details</h2>
                    <div >
                        <div className="details-container">
                            <div className="detail">
                                <label>NAME</label>
                                <input id="customerName" type="text"/>
                            </div>
                            <div className="detail">
                                <label>EMAIL</label> 
                                <input id="email" type="text"/>
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
                    </div>
                </section>

                <section>
                    <h2>Choose your toppings</h2>
                    <div className="toppings-container">  
                        {   toppings.map(item => {
                                return (
                                    <button key={item.name} className="topping" type="button" onClick={this.onToppingClick} id={item.name}>                
                                        <img  src={ require(`../assets/toppings/${item.labelImage}`)} alt={item.name} /><span>{item.name}</span>                   
                                    </button>
                                );
                            })
                        }                 
                    </div>
                </section>

                <section>
                    <h2>Summary</h2>
                    <div> 
                    <ul className="items">                      
                    {   
                        this.state.summary.map(item => {
                            return (                    
                                    <li  key={item}>
                                        <span className="item" >{item}</span>
                                        <span className="price">$0.99</span>                
                                    </li>                          
                            );
                        })
                    }   
                    </ul>
                    </div>                
                    <hr/>
                    <p className="total-price">Total:{"$" + (sum/100).toFixed(2)}</p>
                    <button type="submit">Place order</button>
                </section>                      
            </form>         
        );       
    } 
}

export default Details;
