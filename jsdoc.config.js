module.exports = {
	tags: {
		allowUnknownTags: true,
		dictionaries: ['jsdoc'],
	},
	source: {
		include: ['lib', 'package.json', 'README.md'],
		includePattern: '.js$',
		excludePattern: '(node_modules/|docs)',
	},
	plugins: ['plugins/markdown'],
	templates: {
		cleverLinks: true,
		monospaceLinks: true,
	},
	opts: {
		destination: './docs/',
		encoding: 'utf8',
		private: true,
		recurse: true,
		template: './node_modules/postman-jsdoc-theme',
	},
};
