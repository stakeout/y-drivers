module.exports = {
    'postcss': [],
    'svg': {
        'active': true,
        'workflow': 'symbols',
        'symbolsConfig': {
            'loadingType': 'separate-file-with-link',
            'usePolyfillForExternalSymbols': true,
            'pathToExternalSymbolsFile': 'static/img'
        }
    },
    'css': {
        'workflow': 'concat'
    },
    'js': {
        'workflow': 'modular',
        'bundler': 'webpack',
        'lint': false,
        'useBabel': true,
        'removeConsoleLog': true,
        'webpack': {
            'useHMR': false,
            'providePlugin': {
                $: 'jquery',
                jQuery: 'jquery'
            }
        },
        'jsPathsToConcatBeforeModulesJs': [],
        'lintJsCodeBeforeModules': false,
        'jsPathsToConcatAfterModulesJs': [],
        'lintJsCodeAfterModules': false
    },
    'sourcemaps': {
        'js': {
            'active': true,
            'inline': true
        },
        'css': {
            'active': true,
            'inline': true
        }
    },
    'notifyConfig': {
        'useNotify': true,
        'title': 'TARS notification',
        'sounds': {},
        'taskFinishedText': 'Task finished at: '
    },
    'minifyHtml': false,
    'generateStaticPath': true,
    'buildPath': './builds/',
    'useBuildVersioning': true,
    'useArchiver': true,
    'ulimit': 4096,
    'templater': 'jade',
    'cssPreprocessor': 'stylus',
    'useImagesForDisplayWithDpi': [
        96,
        192,
        288,
        384
    ],
    'fs': {
        'staticFolderName': 'static',
        'imagesFolderName': 'img',
        'componentsFolderName': 'components'
    },
    'staticPrefix': 'static/'
};
