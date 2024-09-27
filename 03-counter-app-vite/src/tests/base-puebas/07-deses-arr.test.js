import { number } from "prop-types";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('prueba de 07-deses-arr', () => {

    test('debe retornar un string y un numero', () => {

        const [letters, numbers] = retornaArreglo();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        /* aca evaluamos el tipo de dato */
        /* podemos ver el tipo de dato mandando a console.log 
        el typeof letters o numbers y devolvera en cadena de texto su 
        tipo de dato */
        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );


        /* aca le decimos que puede venir cualquier string pero tiene 
        que ser un string mientras que en el toBe tiene que ser 
        el string especificado el ABC */
        expect( letters ).toEqual( expect.any(String))
    });
});