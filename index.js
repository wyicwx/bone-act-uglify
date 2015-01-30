var bone = require('bone');

module.exports = bone.wrapper(function(buffer, encoding, callback) {
	var options = this.option.defaults({fromString: true});
	var minify = require("uglify-js").minify;

	var result = minify(buffer.toString() || '', options);

	callback(null, result.code);
});