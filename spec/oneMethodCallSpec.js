describe( '1) Method Call', function (){

    let fruits;
    let peoples;
    let orderInteger;

    beforeEach(function() {
        fruits = [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        peoples = ['Cecilie', 'Lone', 'Emil','Tobias', 'Linus'];
        orderInteger = [1,2,3,4,5,6,7,8,9,10,11,12];
    });

    it('Concatenate', function (){

        let resultArray = fruits.concat( peoples );

        expect([ 'Banana', 'Orange','Melon', 'Apple',
                        'Mango', 'Berries', 'Watermelon','Cecilie', 'Lone',
                        'Emil','Tobias', 'Linus'] ).toEqual(resultArray) ;

    });

    it('CopyWithin', function (){


        let changeResult = orderInteger.copyWithin( 6, 0, 3);

        expect([ 1,2,3,4,5,6,1,2,3,10,11,12]).toEqual(changeResult) ;

    });

    it('Fill', function (){

        let changeResult = fruits.fill( "Kiwi");

        expect(["Kiwi", "Kiwi", "Kiwi","Kiwi", "Kiwi", "Kiwi","Kiwi"]).toEqual(changeResult) ;

    });

    it('Includes', function (){

        let resultBoolean = fruits.includes( "Mango");

        expect(resultBoolean).toBeTrue() ;

    });

    it('Index of', function (){

        let resultNumber = fruits.indexOf("Mango");

        expect(resultNumber).toEqual(4)  ;

    });

    it('Is Array', function (){

        let resultBoolean = Array.isArray(fruits);

        expect(resultBoolean).toBeTrue() ;

    });






});
