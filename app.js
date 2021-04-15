const { multi } = require('./dist/multi');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

console.log( argv );

multi( argv.b, argv.l, argv.h )
    .then(msg => console.log(`${msg} creada!`.green))
    .catch(err => console.log(err));