// React
import React from 'react';
import PropTypes from 'prop-types';

 class Header extends React.Component {
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
convertirPseudo = (pseudo) => {
	return /[aeiouy]/i.test(pseudo[0]) ?`d'${pseudo}`:`de ${pseudo}`
}
/* 
================================
========== RENDER ==============
================================
*/
	render() {
		return (
			<header>
				<h1>La boite à recette {this.convertirPseudo(this.props.pseudo)} </h1>
			</header>
		);
	}
}

/* 
================================
========== PROPTYPES ===========
================================
*/
Header.propTypes = {
	pseudo: PropTypes.string.isRequired,

	}
export default Header;