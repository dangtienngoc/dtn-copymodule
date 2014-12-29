/*
 * grunt-dtn-copymodule
 * https://github.com/ngoc/dtn-copymodule
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

'use strict';

var shell = require('shelljs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('dtn_copymodule', 'Copy', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});
    for(var i =0 ; i < options.opencart_module.length; i++) {
        options.opencart_module[i] = options.folder_svn + options.opencart_module[i] + "/*";
    }
    shell.cp('-Rf', options.opencart_module , options.project_folder);
  });

};
