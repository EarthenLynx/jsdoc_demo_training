class User {
	/**
	 * @desc Creates a new user with a first and a last name
	 *
	 * @param {String} firstName First name of the user
	 * @param {String} lastName Last name of the user
	 */
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	/**
	 * @desc Concats the firstname and lastname of the user
	 *
	 * @returns {String} The full name of the user
	 */
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

module.exports = User;
