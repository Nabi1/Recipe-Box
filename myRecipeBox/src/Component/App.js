// React
import React from 'react';
import PropTypes from 'prop-types';
// Component
import Header from './Header';
import Admin from './Admin';
import Card from './Card';
// Charger les recettes
import recettes from '../recettes';
// Firebase
import base from '../base';

class App extends React.Component {
/* 
========== STATE ================

*/
    state = {
        recettes: {}
    }

/* 
========== FONCTIONS ===========
*/
    componentWillMount() {
        this.ref = base.syncState( `${this.props.match.params.pseudo}/recettes`, {
            context: this,
            state: 'recettes'
        })
    }

    componentWillUnmount() {
    	base.removeBingding(this.ref);
    }
    
    chargerExemple = () => {
        this.setState({
            recettes
        });
    }

    ajouterRecette = (recette) => {
    	const recettes = {...this.state.recettes};
    	const timeStamp= Date.now();
    	recettes[`recette -${timeStamp}`] = recette;
    	this.setState({recettes});
    }

    majRecette = (key, majRecette ) => {
    	const recettes = {...this.state.recettes};
    	recettes[key] = majRecette;
    	this.setState({recettes});
    }
   /* 
========== RENDER ==============
*/
render() {	

	const cards = Object
	.keys(this.state.recettes)
	.map(key => <Card key={key} details={this.state.recettes[key]} />);

	return (
		<div className="box">
			<Header pseudo={this.props.match.params.pseudo} />
			<div className="cards">
				{cards}
			</div>
			<Admin 
				recettes={this.state.recettes}
				majRecette={this.majRecette} 
				chargerExemple={this.chargerExemple} 
				ajouterRecette={this.ajouterRecette} />
		</div>
		)
	}
}

/* 
========== PROPTYPES ===========
*/
App.propTypes = {
	match: PropTypes.object.isRequired,

	}

export default App;
