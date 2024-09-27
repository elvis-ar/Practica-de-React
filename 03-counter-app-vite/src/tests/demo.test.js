test('esta prueba no debe de fallar', () => {
    
    //inicialización 
    const ms = 'hola mundo'
    
    //estimulo
    const ms1 = ms.trim();

    // observar el comportamiento... esperado
    expect( ms ).toBe( ms1 );


})