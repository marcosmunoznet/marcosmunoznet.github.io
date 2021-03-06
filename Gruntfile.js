var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    imagemin: {                          // Task
      png: {
        options: {
            optimizationLevel: 5
        },
        files: [
            {
                // Set to true to enable the following options…
                expand: true,
                // cwd is 'current working directory'
                cwd: './_site/assets/img/',
                src: ['**/*.png'],
                // Could also match cwd line above. i.e. project-directory/img/
                dest: './_site/assets/img/',
                flatten: false,
                ext: '.png'
            },
            {
                // Set to true to enable the following options…
                expand: true,
                // cwd is 'current working directory'
                cwd: './assets/img/',
                src: ['**/*.png'],
                // Could also match cwd line above. i.e. project-directory/img/
                dest: './_site/assets/img/',
                flatten: false,
                ext: '.png'
            }
        ]
    },
    jpg: {
        options: {
            progressive: true
        },
        files: [
            {
                // Set to true to enable the following options…
                expand: true,
                // cwd is 'current working directory'
                cwd: './_site/assets/img/',
                src: ['**/*.jpg', '**/*.jpeg'],
                // Could also match cwd. i.e. project-directory/img/
                dest: './_site/assets/img/',
                flatten: false,
                ext: '.jpg'
            },
            {
                // Set to true to enable the following options…
                expand: true,
                // cwd is 'current working directory'
                cwd: './assets/img/',
                src: ['**/*.jpg', '**/*.jpeg'],
                // Could also match cwd. i.e. project-directory/img/
                dest: './assets/img/',
                flatten: false,
                ext: '.jpg'
            }

        ]
    }
  },
  clean: {
    jpeg: ['./_site/assets/img/posts/featured/*.jpeg',
          './_site/assets/img/posts/content/*.jpeg',
          './_site/assets/img/posts/thumb/*.jpeg',
          './_site/assets/img/*.jpeg',
          './assets/img/posts/featured/*.jpeg',
          './assets/img/posts/content/*.jpeg',
          './assets/img/posts/thumb/*.jpeg',
          './assets/img/*.jpeg'],
    node_modules: ['./_site/node_modules']
  },
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{
                expand: true,
                cwd: '_site/',
                src: '**/*.html',
                dest: '_site/'
            }]
    },
  }
});

  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['imagemin', 'clean','htmlmin']); //'imagemin', 'clean',

};
