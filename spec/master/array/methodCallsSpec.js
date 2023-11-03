describe( 'Master - Array - Method Call', function (){

    let fruits;
    let peoples;
    let order_integer;

    beforeEach(function() {
        fruits = [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        peoples = ['Cecilie', 'Lone', 'Emil','Tobias', 'Linus'];
        order_integer = [1,2,3,4,5,6,7,8,9,10,11,12];
    });

    it('(resultArray) - Concatenate', function (){

        let resultArray = fruits.concat( peoples );

        expect([ 'Banana', 'Orange','Melon', 'Apple',
                        'Mango', 'Berries', 'Watermelon','Cecilie', 'Lone',
                        'Emil','Tobias', 'Linus'] ).toEqual(resultArray) ;

    });

    it('(changeResult) - CopyWithin', function (){

        order_integer.copyWithin( 6, 0, 3)

        expect([ 1,2,3,4,5,6,1,2,3,10,11,12]).toEqual(order_integer) ;

    });

    it('(changeResult) - Fill', function (){

        fruits.fill( "Kiwi");

        expect(["Kiwi", "Kiwi", "Kiwi","Kiwi", "Kiwi", "Kiwi","Kiwi"]).toEqual(fruits) ;

    });

    it('(resultBoolean) - Includes', function (){

        let resultBoolean = fruits.includes( "Mango");

        expect(resultBoolean).toBeTrue() ;

    });

    it('(resultNumber) - Index of', function (){

        let resultNumber = fruits.indexOf("Mango");

        expect(resultNumber).toEqual(4)  ;

    });

    it('(resultBoolean) - Is Array', function (){

        let resultBoolean = Array.isArray(fruits);

        expect(resultBoolean).toBeTrue() ;

    });

    it('(resultString) - Join', function (){

        let resultString = fruits.join();

        expect(resultString).toEqual( "Banana,Orange,Melon,Apple,Mango,Berries,Watermelon");

    });

    it('(resultNumber) - Last Index Of', function (){

        let resultNumber = fruits.lastIndexOf("Apple");

        expect(resultNumber).toEqual( 3);

    });

    it('(resultArray) - Reverse', function (){

        //[ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        let resultArray = fruits.reverse();

        expect(resultArray).toEqual( ['Watermelon','Berries','Mango','Apple',
            'Melon','Orange','Banana']);

    });
    it('(resultArray) - Slice', function (){

        //[ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        let resultArray = fruits.slice(1,3);

        expect(resultArray).toEqual( ['Orange','Melon']);

    });
    it('(changeResult) - Splice', function (){

        //[ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        fruits.splice(2, 0, "Lemon", "Kiwi");

        expect(fruits).toEqual( ['Banana', 'Orange',"Lemon", "Kiwi",
            'Melon', 'Apple', 'Mango', 'Berries', 'Watermelon']);

    });
    it('(resultString) - To String', function (){

        //[ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        let resultString = fruits.toString();

        expect(resultString).toEqual( 'Banana,Orange,Melon,Apple,Mango,Berries,Watermelon');

    });
    it('(resultString) - Value To', function (){

        //[ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        let resultString = fruits.valueOf();

        expect(resultString).toEqual( [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon']);

    });



});
