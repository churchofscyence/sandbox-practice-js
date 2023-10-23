describe( '1) Method Call', function (){

    let fruits;
    let peoples;

    beforeEach(function() {
        fruits = [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        peoples = ['Cecilie', 'Lone', 'Emil','Tobias', 'Linus'];
    });

    it('Concatenate', function (){

        let result = fruits.concat( peoples );

        expect([ 'Banana', 'Orange','Melon', 'Apple',
                        'Mango', 'Berries', 'Watermelon','Cecilie', 'Lone',
                        'Emil','Tobias', 'Linus'] ).toEqual(result) ;

    });

    it('CopyWithin', function (){

        //     0,       1,      2,        3,       4,       5,          6
        //[ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon']
        let result = fruits.copyWithin( 2, 3, 5);

        expect([ 'Banana', 'Orange',
            'Apple', 'Mango', 'Mango', 'Berries', 'Watermelon']).toEqual(result) ;

    });

    it('Fill', function (){

        let result = peoples.fill( "X");

        expect(['X', 'X', 'X','X', 'X']).toEqual(result) ;

    });

    it('Includes', function (){

        let resultFalse = peoples.includes( "X");

        expect(resultFalse).toBeFalse() ;

    });

    it('Index of', function (){

        let resultNumber = peoples.indexOf( 'Emil');

        expect(resultNumber).toEqual(2)  ;

    });

    it('Is Array', function (){

        let resultBoolean = Array.isArray(fruits);

        expect(resultBoolean).toBeTrue() ;

    });






});
