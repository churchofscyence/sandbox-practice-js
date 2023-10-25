describe( 'Master - Reg Expr - Method Calls', function () {


    beforeEach(function () {

    });

    it('Object Notation', function () {

        let inputString = 'The fat cat ran down the street by the Cat Club.';

        var regex = /cat/g;

        let resultString = inputString.replace(regex , "X");

        expect(resultString).toEqual('The fat X ran down the street by the Cat Club.');

    });
    it('Object Constructor', function () {

        let inputString = 'The fat cat ran down the street by the Cat Club.';

        var regex = new RegExp("cat", "gi");

        let resultString = inputString.replace(regex , "X");

        expect(resultString).toEqual('The fat X ran down the street by the X Club.');

    });



});
