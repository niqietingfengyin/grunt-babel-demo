/**
 * Created by yuyingying on 2017/2/13.
 */
module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        babel:{
            options:{
                sourceMap:false,
                sourceRoot:'E://git-code/es6',
                presets:['es2015',{'loose':'all'}]
            },
            dist:{
                files:
                {
                  //  'dist/app.js':'src/*.es'
                    "E:\\svn\\pc_vr_branches\\yuyingying\\wapvr\\111\\dev\\js\\111.js":"E:\\svn\\pc_vr_branches\\yuyingying\\wapvr\\111\\dev_es\\111.es"
                }
            }
        },
        'watch':{
            'wap-es6-js':{
                files:['E:\\svn\\pc_vr_branches\\yuyingying\\wapvr\\111\\dev_es\\111.es'],
               // files:['src/*.es'],
                tasks:['babel'],
                options:{
                    event:['added','changed','deleted'],
                    spawn:false
                }
            }
        }
    });
    grunt.registerTask('default',['watch']);
}

