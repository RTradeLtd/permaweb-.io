module.exports = function(grunt) {
  let concatFile = 'temp/js/materialize_concat.js.map';


  // configure the tasks
  let config = {
    //  Copy
    copy: {
      dist: { cwd: 'font', src: [ '**' ], dest: 'dist/font', expand: true },
    },


    //  Sass
    sass: {                              // Task
      expanded: {                            // Target
        options: {                       // Target options
          outputStyle: 'expanded',
          sourcemap: false,
        },
        files: {
          'css/admin-materialize.css': 'sass/admin.scss',
        }
      },

      min: {
        options: {
          outputStyle: 'compressed',
          sourcemap: false
        },
        files: {
          'css/admin-materialize.min.css': 'sass/admin.scss',
        }
      },
    },

    // PostCss Autoprefixer
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: [
                'last 2 versions',
                'Chrome >= 30',
                'Firefox >= 30',
                'ie >= 10',
                'Safari >= 8']
          })
        ]
      },
      expanded: {
        src: 'css/admin-materialize.css'
      },
      min: {
        src: 'css/materialize.min.css'
      },
    },

    babel: {
      options: {
        sourceMap: false,
        plugins: [
          'transform-es2015-arrow-functions',
          'transform-es2015-block-scoping',
          'transform-es2015-classes',
          'transform-es2015-template-literals',
          'transform-es2015-object-super'
        ]
      },
      bin: {
        options: {
          sourceMap: true
        },
        files: {
          'js/materialize.js': 'temp/js/materialize_concat.js'
        }
      },
      dist: {
        files: {
          'dist/js/materialize.js': 'temp/js/materialize.js'
        }
      }
    },

    // Browser Sync integration
    browserSync: {
      bsFiles: ["bin/*.js", "bin/*.css", "!**/node_modules/**/*"],
      options: {
          server: {
              baseDir: "./" // make server from root dir
          },
          port: 8000,
          ui: {
              port: 8080,
              weinre: {
                  port: 9090
              }
          },
          open: false
      }
    },

//  Concat
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: [
          'materialize/js/cash.js',
          'materialize/js/component.js',
          'materialize/js/global.js',
          'materialize/js/anime.min.js',
          'materialize/js/collapsible.js',
          'materialize/js/dropdown.js',
          'materialize/js/modal.js',
          'materialize/js/materialbox.js',
          'materialize/js/parallax.js',
          'materialize/js/tabs.js',
          'materialize/js/tooltip.js',
          'materialize/js/waves.js',
          'materialize/js/toasts.js',
          'materialize/js/sidenav.js',
          'materialize/js/scrollspy.js',
          'materialize/js/autocomplete.js',
          'materialize/js/forms.js',
          'materialize/js/slider.js',
          'materialize/js/cards.js',
          'materialize/js/chips.js',
          'materialize/js/pushpin.js',
          'materialize/js/buttons.js',
          'materialize/js/datepicker.js',
          'materialize/js/timepicker.js',
          'materialize/js/characterCounter.js',
          'materialize/js/carousel.js',
          'materialize/js/tapTarget.js',
          'materialize/js/select.js',
          'materialize/js/range.js'
        ],
        // the location of the resulting JS file
        dest: 'js/materialize.js'
      },
      temp: {
        // the files to concatenate
        options: {
          sourceMap: true,
          sourceMapStyle: 'link'
        },
        src: [
          'materialize/js/cash.js',
          'materialize/js/component.js',
          'materialize/js/global.js',
          'materialize/js/anime.min.js',
          'materialize/js/collapsible.js',
          'materialize/js/dropdown.js',
          'materialize/js/modal.js',
          'materialize/js/materialbox.js',
          'materialize/js/parallax.js',
          'materialize/js/tabs.js',
          'materialize/js/tooltip.js',
          'materialize/js/waves.js',
          'materialize/js/toasts.js',
          'materialize/js/sidenav.js',
          'materialize/js/scrollspy.js',
          'materialize/js/autocomplete.js',
          'materialize/js/forms.js',
          'materialize/js/slider.js',
          'materialize/js/cards.js',
          'materialize/js/chips.js',
          'materialize/js/pushpin.js',
          'materialize/js/buttons.js',
          'materialize/js/datepicker.js',
          'materialize/js/timepicker.js',
          'materialize/js/characterCounter.js',
          'materialize/js/carousel.js',
          'materialize/js/tapTarget.js',
          'materialize/js/select.js',
          'materialize/js/range.js'
         ],
        // the location of the resulting JS file
        dest: 'temp/js/materialize_concat.js'
      },
    },

//  Uglify
    uglify: {
      options: {
        // Use these options when debugging
        // mangle: false,
        // compress: false,
        // beautify: true

      },
      dist: {
        files: {
          'js/materialize.js': ['js/materialize.js']
        }
      },
      bin: {
        files: {
          'bin/materialize.js': ['temp/js/materialize.js']
        }
      },
      extras: {
        files: {
          'extras/noUiSlider/nouislider.min.js': ['extras/noUiSlider/nouislider.js']
        }
      }
    },


//  Clean
   clean: {
     temp: {
       src: [ 'temp/' ]
     },
   },

    //  Jade
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "calendar.html": "jade/calendar.jade",
          "card-lists.html": "jade/card-lists.jade",
          "dashboard.html": "jade/dashboard.jade",
          "line-charts.html": "jade/line-charts.jade",
          "bar-charts.html": "jade/bar-charts.jade",
          "financial-charts.html": "jade/financial-charts.jade",
          "doughnut-charts.html": "jade/doughnut-charts.jade",
          "area-charts.html": "jade/area-charts.jade",
          "interactive-charts.html": "jade/interactive-charts.jade",
          "header-tabbed.html": "jade/header-tabbed.jade",
          "header-metrics.html": "jade/header-metrics.jade",
          "header-search.html": "jade/header-search.jade",
          "fullscreen-table.html": "jade/fullscreen-table.jade",
          "table-custom-elements.html": "jade/table-custom-elements.jade",
          "log-in.html": "jade/log-in.jade",
          "settings.html": "jade/settings.jade",
          "pages-fixed-chart.html": "jade/pages-fixed-chart.jade",
          "pages-grid.html": "jade/pages-grid.jade",
          "pages-chat.html": "jade/pages-chat.jade",
        }
      }
    },

//  Watch Files
    watch: {
      jade: {
        files: ['jade/**/*'],
        tasks: ['jade_compile'],
        options: {
          interrupt: false,
          spawn: false,
        },
      },

      js: {
        files: [ "js/**/*", "!js/init.js"],
        tasks: ['js_compile'],
        options: {
          interrupt: false,
          spawn: false,
        },
      },

      sass: {
        files: ['sass/**/*'],
        tasks: ['sass_compile'],
        options: {
          interrupt: false,
          spawn: false,
        },
      }
    },


//  Concurrent
    concurrent: {
      options: {
        logConcurrentOutput: true,
        limit: 10,
      },
      monitor: {
        tasks: ["watch:jade", "watch:js", "watch:sass", "notify:watching", 'server']
      },
    },


//  Notifications
    notify: {
      watching: {
        options: {
          enabled: true,
          message: 'Watching Files!',
          title: "Materialize", // defaults to the name in package.json, or will use project directory's name
          success: true, // whether successful grunt executions should be notified automatically
          duration: 1 // the duration of notification in seconds, for `notify-send only
        }
      },

      sass_compile: {
        options: {
          enabled: true,
          message: 'Sass Compiled!',
          title: "Materialize",
          success: true,
          duration: 1
        }
      },

      js_compile: {
        options: {
          enabled: true,
          message: 'JS Compiled!',
          title: "Materialize",
          success: true,
          duration: 1
        }
      },

      jade_compile: {
        options: {
          enabled: true,
          message: 'Jade Compiled!',
          title: "Materialize",
          success: true,
          duration: 1
        }
      },

      server: {
        options: {
          enabled: true,
          message: 'Server Running!',
          title: "Materialize",
          success: true,
          duration: 1
        }
      }
    },

    // Text Replace
    // replace: {
    //   version: { // Does not edit README.md
    //     src: [
    //       'bower.json',
    //       'package.json',
    //       'package.js',
    //       'jade/**/*.html'
    //     ],
    //     overwrite: true,
    //     replacements: [{
    //       from: grunt.option( "oldver" ),
    //       to: grunt.option( "newver" )
    //     }]
    //   },
    //   readme: { // Changes README.md
    //     src: [
    //       'README.md'
    //     ],
    //     overwrite: true,
    //     replacements: [{
    //       from: 'Current Version : v'+grunt.option( "oldver" ),
    //       to: 'Current Version : v'+grunt.option( "newver" )
    //     }]
    //   },
    // },

    // Create Version Header for files
    // usebanner: {
    //     release: {
    //       options: {
    //         position: 'top',
    //         banner: "/*!\n * Materialize v"+ grunt.option( "newver" ) +" (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */",
    //         linebreak: true
    //       },
    //       files: {
    //         src: [ 'dist/css/*.css', 'dist/js/*.js']
    //       }
    //     }
    //   },

      // Rename files
    // rename: {
    //       rename_src: {
    //           src: 'bin/materialize-src'+'.zip',
    //           dest: 'bin/materialize-src-v'+grunt.option( "newver" )+'.zip',
    //           options: {
    //             ignore: true
    //           }
    //       },
    //       rename_compiled: {
    //           src: 'bin/materialize'+'.zip',
    //           dest: 'bin/materialize-v'+grunt.option( "newver" )+'.zip',
    //           options: {
    //             ignore: true
    //           }
    //       },
    //   },

      // Removes console logs
      removelogging: {
          source: {
            src: ["js/**/*.js", "!js/velocity.min.js"],
            options: {
              // see below for options. this is optional.
            }
          }
      },
  };

  grunt.initConfig(config);

  // load the tasks
  // grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-remove-logging');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-babel');

  // define the tasks
  grunt.registerTask(
    'release',[
      'lint',
      'copy',
      'sass:expanded',
      'sass:min',
      'postcss:expanded',
      'postcss:min',
      'concat:dist',
      'uglify:dist',
      'uglify:extras',
      // 'usebanner:release',
      // 'compress:main',
      // 'compress:src',
      // 'compress:starter_template',
      // 'compress:parallax_template',
      // 'replace:version',
      // 'replace:readme',
      // 'rename:rename_src',
      // 'rename:rename_compiled'
    ]
  );

  grunt.task.registerTask('configureBabel', 'configures babel options', function() {
    config.babel.bin.options.inputSourceMap = grunt.file.readJSON(concatFile);
  });

  grunt.registerTask('jade_compile', ['jade', 'notify:jade_compile']);
  grunt.registerTask('js_compile', ['concat:temp', 'configureBabel', 'babel:bin', 'clean:temp']);
  grunt.registerTask('sass_compile', ['sass:min', 'postcss:min', 'notify:sass_compile']);
  grunt.registerTask('server', ['browserSync', 'notify:server']);
  grunt.registerTask('lint', ['removelogging:source']);
  grunt.registerTask('monitor', ["concurrent:monitor"]);
  grunt.registerTask('travis', ['jasmine']);
};
