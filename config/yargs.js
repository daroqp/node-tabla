const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    desc: 'Es la base de la tabla de multiplicar'
                })                
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    desc: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    desc: 'Este es el numero hasta donde quieres la tabla'
                })
                .check( (argv, option) => {
                    if( isNaN(argv.h) ) {
                        throw 'Hasta no es un numero'
                    }
                    return true;
                })
                .argv;


module.exports = argv;