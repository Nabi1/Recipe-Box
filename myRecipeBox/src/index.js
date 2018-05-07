// React
import React from 'react';
import {render} from 'react-dom';
// Component
import Connexion from './Component/Connexion'
import App from './Component/App';
import NotFound from './Component/NotFound';
// Router
// import {BrowserRouter, Match, Miss} from 'react-router';
import {  Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// CSS
import './index.css';

const Root = () => {
	return (
      <BrowserRouter>
        	<div>
            	<Route exact path="/" component={Connexion} />
            	<Route path="/box/:pseudo" component={App} />
           	 	{/*Quand aucune nore ne match avec la current location alors le render retourne NotFOund est */}
           	 	<Route component={NotFound} />
			</div>
      </BrowserRouter>
	)
};

render(
	<Root />,
	document.getElementById('root')
);