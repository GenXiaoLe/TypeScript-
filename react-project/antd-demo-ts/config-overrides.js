const { override, fixBabelImports } = require('customize-cra');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    });
};