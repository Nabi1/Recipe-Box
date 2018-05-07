// React
import React from 'react';
import PropTypes from 'prop-types';

class AjouterRecette extends React.Component {
/*
======== STATE ========
*/

/*
======== FONCTIONS ========
*/
    creerRecette = e => {
    	e.preventDefault();
        const recette = {
            nom: this.nom.value,
            image: this.image.value,
            ingredients: this.ingredients.value,
            instructions: this.instructions.value,
        }
        this.props.ajouterRecette(recette) ;
        this.recetteForm.reset()
    }
/*
======== RENDER ========
*/
	render() {
		return (
			<div className="card">
				<form onSubmit={e => this.creerRecette(e)} ref={input=>this.recetteForm = input}
				className="admin-form ajouter-recette"
				>
					<input ref={input => this.nom = input} type="text" placeholder="Nom de la recette" />
					<input ref={input => this.image = input} type="text" placeholder="Adresse de l'image" />
					<textarea ref={input => this.ingredients = input} placeholder="Liste des ingrédients séparés par une virgule" rows="3"></textarea>
					<textarea ref={input => this.instructions = input} placeholder="Liste des instructions (une par ligne)" rows="15"></textarea>
					<button type="submit">+ Ajouter une recette</button>
				</form>
			</div>
		)
	}
}

AjouterRecette.propTypes = {
	ajouterRecette: PropTypes.func.isRequired,

	}

export default AjouterRecette