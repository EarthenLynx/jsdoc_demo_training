/**
 * @access      public
 * @function
 *
 * @author      q-bit
 *
 * @desc        This function concatenates a first name and
 *              a last name to a full name
 *
 * @version     0.0.1
 *
 * @param       {String} firstName The first name of the person
 * @param       {String} lastName The last name of the person
 *
 * @example
 * const fullName = getFullName('Max', 'Mustermann');
 * console.log(fullName) // -> Evals into 'Max Mustermann'
 *
 * @returns     {String}
 */
function getFullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}

console.log(getFullName('Tobias', 'Quante'));
