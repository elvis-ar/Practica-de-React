import { getSaludo } from "../../base-pruebas/02-template-string";

describe('prueba en 02-template-string', () => {

    test('getSaludo debe de retornar hola elvis', () => {

        const name = 'Elvis';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`)
    });
})