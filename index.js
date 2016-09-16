/**
 * Returns a random string
 * @param {number} number
 * @return {string}
 */

const randomString = function( m=5 ) {

	if( typeof m !== 'number' ) {
		throw {name : "Error", message : "Paramater must be a number"};

	} else {
		let x = '';
		const y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

		for( let i = 0; i < m; i++ ) {
			x += y.charAt( Math.floor( Math.random() * y.length ));
		}
		return x;
	}
};

exports.randomString = randomString;
