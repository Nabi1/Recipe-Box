// React
import React from 'react';
import PropTypes from 'prop-types';

 class Card extends React.Component {
 /* 
========== STATE ================
*/


/* 
================================
========== FONCTIONS ===========
================================
*/

/* 
================================
========== RENDER ==============
================================
*/
	render() {

		const ingredients = this.props.details.ingredients.split(',')
		.map((ingredient, key) => <li key={key}> {ingredient} </li>);
		

		const instructions = this.props.details.instructions.split('\n')
		.map((instruction, key) => <li key={key}> {instruction} </li>);

		return (
			<div className="card">
				<div className="image">
					<img src={this.props.details.image} alt={this.props.details.nom} />
				</div>
				<div className="recette">
					<h2>{this.props.details.nom}</h2>
					<ul className="liste-ingredients">
						{ingredients}
					</ul>
					<ol className="liste-instrucitons">
						{instructions}
					</ol>
				</div>
			</div>
		);
	}
}
/* 
========== PROPTYPES ===========
*/
Card.propTypes = {
	details: PropTypes.object.isRequired,

	}
export default Card;