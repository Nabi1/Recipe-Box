import React from 'react';
import PropTypes from 'prop-types';
// CSS

class Connexion extends React.Component {

/* 
================================
========== FONCTIONS ===========
================================
*/
	goToApp = event => {
		event.preventDefault();
		// Récupération du pseudo
		const pseudo =this.boxInput.value;
		this.props.history.push(`/box/${pseudo}`);
	};

/* 
================================
========== RENDER ==============
================================
*/
	render() {
		return (
			<div className="connexionBox" >
				<form action="" className="connexion" onSubmit={(e) =>
				this.goToApp(e)} >
				<h1>Ma boite à recettes</h1>
					<input 
						type="text" 
						placeholder='Nom du chef' 
						required 
						ref={(input) => this.boxInput = input} 
					/>
					<button type='submit'>Go</button>
				</form>
			</div>
		)
	}
	// Root.contextTypes = {
	// 	router: React.PropTypes.object
	// }
}


/* 
================================
========== PROPTYPES ===========
================================
*/

// Connexion.contextTypes = {
// 	router: React.PropTypes.object.isRequired
// }
Connexion.propTypes = {
	history: PropTypes.object.isRequired
}

export default Connexion;
