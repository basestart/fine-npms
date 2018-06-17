const rm = require('rimraf');

rm('./rm', function(err){
    if(err){
        throw err;
    }
})