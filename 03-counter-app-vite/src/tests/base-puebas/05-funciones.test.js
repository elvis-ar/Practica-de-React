import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('pruebas 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toEqual( user );
    })

    test('GetUsuarioActivo debe retornar un objeto', () => {
        const fullName = "Elvis Arias";

        const uActive = {
            uid: 'ABC567',
            username: fullName
        }

        const userActive = getUsuarioActivo( fullName );

        expect( uActive ).toEqual( userActive );
    })
})