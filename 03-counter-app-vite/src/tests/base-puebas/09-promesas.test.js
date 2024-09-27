import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe( 'Pruebas en 09-promesas', () => {

    test( 'getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( true ).toBe( false );

                done();
            })

    } )

} )