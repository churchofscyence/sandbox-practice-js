describe( 'Master - Reg Expr - Objects', function () {


    beforeEach(function () {

    });

    it('Object Notation', function () {

        let inputString = 'The fat cat ran down the street by the Cat Club.';

        //Learning JavaScript
        var regex = /cat/g;
        //Learning JavaScript

        let resultString = inputString.replace(regex , "X");

        expect(resultString).toEqual('The fat X ran down the street by the Cat Club.');

    });
    it('Object Constructor', function () {

        let inputString = 'The fat cat ran down the street by the Cat Club.';

        //Learning JavaScript
        var regex = new RegExp("cat", "gi");
        //Learning JavaScript

        let resultString = inputString.replace(regex , "X");

        expect(resultString).toEqual('The fat X ran down the street by the X Club.');

    });



});
