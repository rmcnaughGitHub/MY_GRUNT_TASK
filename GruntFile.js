module.exports = function(grunt){
	//To install moduels
	//npm install grunt-contrib-copy --save-dev

	//grunt taks and plugins


	// Project configuration.
	grunt.initConfig({
		// get the configuration info from package.json ----------------------------
    	// this way we can use things like name and version (pkg.name)

		//To fix Warning: Task "default" not found
		//grunt.file.defaultEncoding = 'utf8',

		pkg: grunt.file.readJSON('package.json'),


		//http://culttt.com/2013/11/18/setting-sass-grunt/
		sass: { // Task 
			dist: { // Target
				files: {
					'dist/miguel.css': 'sass/miguel.sass'// 'destination': 'source'
				}

			}
		},

		css: {
			files: ['scss/*.scss'],
			tasks: ['sass', 'autoprefixer'],
			options: {
				spawn: false,
				livereload: true,
			}
		},
		
		jshint: {
			files: {// Dictionary of files
				options:{
					jshintrc: '.jshintrc',
					globals: {
						jQuery: true
					}
				}
			}
		},

		concat: {
			dist: {
				src: [
					'js/miguel.js'
				],
				dst: '/dest/js/miguel.js',
			},
			uglify: {
				src: 'js/miguel.js',
				dest: '/dest/js/miguel.js',
			}

		},

		/*Whether to spawn task runs in a child process. Setting this option to false speeds up the reaction time of the watch (usually 500ms faster for most) and allows subsequent task runs to share the same context. Not spawning task runs can make the watch more prone to failing so please use as needed.*/
		watch: {

			css: {
		        files: ['src/css/*.scss'],
		        tasks: ['sass:dev']
		      },
		      html: {
		        files: ['index.html'],
		        tasks: ['build'],
		        options: {
					livereload: true,
				},
		      },
			scripts: {
				files: ['js/*.js', 'js/libs/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
					livereload: true,
				},
			},	
		}

	});
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	/*grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browser-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('css',['compass', 'cssmin']);
    grunt.registerTask('js',['concat', 'uglify']);*/
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	

	//Register the default tasks
	grunt.registerTask('default', ['watch', 'jshint','sass']);
}