# JS - Doc template

Homepage: https://jsdoc.app/

JSDoc makes documenting code easy. It reads comments in the code and recognizes Block tags. It is distributed as a node.js package, but could also be run without it.

Among the Javascript code methodologies that can be documented are:

- Classes
- Modules (several related functions inside a file)
- Namespaces (set of related signs / names)
- Global functions

Take a look at the following function example:

```javascript
/*
 * @public
 * @function
 *
 * @param     {String} firstName The first name of the user who is called.
 * @param     {String} lastName The last name of the user who is called.
 *
 * @example
 * var firstName = 'Max'
 * var lastName = 'Mustermann'
 *
 * var name = getFullName(firstName, lastName)
 * console.log(name) // -> Returns 'Max Mustermann'
 */
function getFullName (firstName, lastName) {
  return firstName + ' ' + lastName;
}
```

JSDoc takes the tags, indicated by a starting @, and compiles them into a html - template. This MD walks through a basic setup to configure a workspace for automatic documentation creation

## Installation

There are two methods to install jsdoc, either on your mashine or in your project. Based on the setup method, the script in the package.json file has to be configured

```sh
# Global installation
$ npm i -g jsdoc

# Project specific installation (development dependency)
$ npm i -D jsdoc
```

Then, you can include the node scripts in the `package.json` as follows:

- If globally installed

```json
  "scripts": {
    "doc": "jsdoc"
  },
```

- If installed in project scope, there's a binary you can use

```json
  "scripts": {
    "doc": "./node_modules/.bin/jsdoc"
  },
```

As this will, by itself, not do anything as it does not recognize files yet, you should now move to configuration:

## Configure JSDoc

- Create a new file called `jsdoc.config.js` in your root directory
- Replace the above script in the `package.json` file with:

```json
  "scripts": {
    "doc": "jsdoc -c jsdoc.config.js"
  },
```

- Add the following to your `jsdoc.config.js` file:

```javascript
module.exports = {
	tags: {
		allowUnknownTags: true,
		dictionaries: ['jsdoc'],
  },

  // Include or exclude paths
	source: {
		include: ['lib', 'package.json', 'README.md'],
		includePattern: '.js$',
		excludePattern: '(node_modules/|docs)',
  },

  // Add plugins that can be used during compilation
  plugins: ['plugins/markdown'],

  // Customize the html tempalte
	templates: {
		cleverLinks: true,
		monospaceLinks: true,
  },

  // Customize optional options. Third party templates can be registered here
	opts: {
		destination: './docs/',
		encoding: 'utf8',
		private: true,
    recurse: true,
		// template: './node_modules/postman-jsdoc-theme',
	},
};
```

- Make sure to add the output directory to your .gitignore file.

## Template for some relevant tags

```javascript
/*
 * @access      public / private
 * @function
 * @class
 * @async
 * @callback
 *
 * @author      name of the author
 *
 * @version     1.2.0
 *
 * @desc        Describe what the function / method does
 *
 * @requires    modules or libs this function / class requires
 *
 * @param       {String} Name Data type of the 'Name' argument
 *
 * @example     Give a code example
 *
 * @returns     {Object} Describes into what the function / class evaluates
 */
```

## Document ES5 classes

```javascript
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
```

## Document UI5 webapp controllers

```javascript
sap.ui.define(['sap/ui/core/mvc/Controller'],

  /*
   * @namespace ui5_my_namespace_Basecontroller
   */

  function(Controller) {
  'use strict';

  return Controller.extend('ui5_my_namespace_Basecontroller', {
    /*
     * @memberof ui5_my_namespace_Basecontroller
     * @access   public
     * @function
     */
    handleFilterTable(oEvent) {
      // ... do something here
    }
  })
})
```

## MOre

[Cheatsheet](https://devhints.io/jsdoc)