describe( 'Master - Reg Expr - Objects', function () {


    beforeEach(function () {

    });

    it('(replaceMethod) - Object Notation', function () {

        let fatCat = 'The fat cat ran down the street by the Cat Club.';

        let replaceMethod = fatCat.replace(/cat/g , "X");

        expect(replaceMethod).toEqual('The fat X ran down the street by the Cat Club.');

    });
    it('(replaceMethod) - Object Constructor', function () {

        let fatCat = 'The fat cat ran down the street by the Cat Club.';

        //Learning JavaScript
        var regex = new RegExp("cat", "gi");
        //Learning JavaScript

        let replaceMethod = fatCat.replace(regex , "X");

        expect(replaceMethod).toEqual('The fat X ran down the street by the X Club.');

    });



});
