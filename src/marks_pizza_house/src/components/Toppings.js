import React, { Component } from 'react';




class Toppings extends Component {    

    render() {              
        let toppings = 
        [
            {
                name: 'Anchovy',
                labelImage: 'anchovy.svg',
                price: '0.99',
            }
            , 
            {
                name: 'Bacon',
                labelImage: 'bacon.svg',
                price: '0.99',
            }, 
            {
                name: 'Basil',
                labelImage: 'basil.svg',
                price: '0.99',
            }, 
            {
                name: 'Chili',
                labelImage: 'chili.svg',
                price: '0.99',
            }, 
            {
                name: 'Mozzarella',
                labelImage: 'mozzarella.svg',
                price: '0.99',
            }, 
            {
                name: 'Mushroom',
                labelImage: 'mushroom.svg',
                price: '0.99',
            }, 
            {
                name: 'Olive',
                labelImage: 'olive.svg',
                price: '0.99',
            },
            {
                name: 'Onion',
                labelImage: 'onion.svg',
                price: '0.99',
            }, 
            {
                name: 'Pepper',
                labelImage: 'pepper.svg',
                price: '0.99',
            }, 
            {
                name: 'Pepperoni',
                labelImage: 'pepperoni.svg',
                price: '0.99',
            },
            {
                name: 'Peppers',
                labelImage: 'peppers.svg',
                price: '0.99',

            },
            {
                name: 'Sweetcorn',
                labelImage: 'sweetcorn.svg',
                price: '0.99',
           }
        ];

          return toppings.map(item => {
            return (
                <button className="topping" type="button">                
                    <img  src={ require(`../assets/toppings/${item.labelImage}`)} alt={item.name} /><span>{item.name}</span>                   
                </button>
            );
          });
    }
}

export default Toppings;