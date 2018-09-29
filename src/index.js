import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import PizzaViewer from './components/PizzaViewer';
import Details from './components/Details';



let content = (
    <section className="pizza-creator-app">
        <PizzaViewer />
        <Details  onSelectLanguage={this.handleLanguage} />   
        
    </section>
)


ReactDOM.render(content, document.getElementById('root'));
registerServiceWorker();
