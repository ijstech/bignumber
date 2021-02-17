const Path = require('path');
const PackagePath = __dirname;
const BigNumber = require('./bignumber');

module.exports = {
    _plugin: function(vm){        
        vm.injectModule(Path.join(PackagePath, 'bignumber.js'));
    },
    BigNumber: BigNumber
}