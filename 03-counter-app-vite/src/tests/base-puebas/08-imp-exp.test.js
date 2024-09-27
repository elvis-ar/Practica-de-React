import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../data/heroes'

describe('pruebas en 08-imp-exp', () => {

    test('getHeroesById debe de retornar un heroe por id', () => {

        const id = 2;
        const hero = getHeroeById( id );
        console.log( hero )

        expect( hero ).toEqual( {id: 2, name: 'Spiderman', owner: 'Marvel'} )

    })

    /* tarea */
    test('getHeroesByOwner debe retornar un arreglo con 3 heroes de DC y 2 de Marvel', () => {
        const DC = getHeroesByOwner('DC');
        const Marvel = getHeroesByOwner('Marvel');

        const lengthDc = 3;
        const lengthMarvel = 2;


        expect( lengthDc ).toBe( DC.length );
        expect( lengthMarvel ).toBe( Marvel.length );
    })

    test('getHeroesByOwner debe retornar solo DC', () => {
        const arrDC = getHeroesByOwner('DC');

        expect( arrDC ).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ])
    })

    test('getHeroesByOwner debe retornar solo Marvel', () => {
        const arrMarvel = getHeroesByOwner('Marvel');

        expect( arrMarvel ).toEqual(
            [
                { id: 2,name: 'Spiderman',owner: 'Marvel' },
                { id: 5,name: 'Wolverine',owner: 'Marvel' }
            ])
    })


} )