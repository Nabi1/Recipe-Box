// React
import React from 'react';
import PropTypes from 'prop-types';
// Component
import AjouterRecette from './AjouterRecette';

 class Admin extends React.Component {
 	/* 
=================================
========== STATE ================
=================================
*/


/* 
================================
========== FONCTIONS ===========
================================
*/
traiterCahngement = (e, key) => {
	const recette = this.props.recette[key];
	const majRecette = {
		...recette,
		[event.target.name]:event.target.value
	};
	this.props.majRecette(key, majRecette);
}
renderAdmin = key => {
	const recette = this.props.recette[key];

	return (
		<div className="card" key={key}>
			<form className="admin-form">
				<input 
				onChange={e =>this.traiterCahngement(e, key)} 
				type="text" name="nom" 
				placeholder="Nom de la recette" 
				value={recette.nom} />
				<input 
				onChange={e =>this.traiterCahngement(e, key)} 
				type="text" name="image" 
				placeholder="Adresse de l'image" 
				value={recette.image} />
				<textarea 
				onChange={e =>this.traiterCahngement(e, key)}
				name="ingrédients" 
				placeholder="Liste des ingrédients séparés par une virgule" 
				rows="3" 
				value={recette.ingrédients}></textarea>
				<textarea 
				onChange={e =>this.traiterCahngement(e, key)} 
				name='instructions' 
				placeholder="Liste des instructions (une par ligne)" r
				ows="15" 
				value={recette.instructions}></textarea>
			</form>
		</div>
	)
}
/* 
================================
========== RENDER ==============
================================
*/
	render() {
		const adminCards = Object
		.keys(this.props.recettes)
		.map(this.renderAdmin);

		return (
			<div className="cards">
			<AjouterRecette ajouterRecette={this.props.ajouterRecette} />
			{adminCards}
				<footer>
					<button onClick={this.props.chargerExemple}>Remplissez s'il vous plais</button>
				</footer>
			</div>
		);
	}
}
/* 
================================
========== PROPTYPES ===========
================================
*/
Admin.propTypes = {
	recettes: PropTypes.object.isRequired,
	majRecette: PropTypes.func.isRequired,
	chargerExemple: PropTypes.func.isRequired,
	ajouterRecette: PropTypes.func.isRequired,

	}
export default Admin;