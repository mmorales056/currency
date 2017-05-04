module.exports = function (grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: false,
				sourceMap: false
			},
			currency: {
				files: {
					'currency.min.js': ['currency.js']
				}
			}
		},

		watch: {
			options: {
				nospawn: true,
				livereload: true
			},
			js: {files: ['currency.js'], tasks: ['uglify:currency']}
		}
	});
	
	grunt.registerTask('default', ['uglify', 'watch']);
};