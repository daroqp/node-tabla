const fs = require('fs');

const multi = async( base=5, listar=false, hasta=10 ) => {

    try {

        let numeros = '';
        for(let i=1; i<= hasta ; i++){
            numeros += `${ base } x ${i } = ${ base*i }\n`;
        }

        if( listar ) {
            console.log('==================='.rainbow);
            console.log('   Tabla del'.trap, base );
            console.log('==================='.rainbow);
            console.log(numeros.rainbow);
        }

        fs.writeFileSync(`./salida/numero-${ base }.txt`, numeros);


        return `text-${ base }.txt`

    }catch( err ) {
        throw err;
    }

}

module.exports = {
    multi
}