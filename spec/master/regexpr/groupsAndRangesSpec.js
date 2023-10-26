describe( 'Master - Reg Expr - Groups And Ranges', function () {

    beforeEach(function () {

    });

    it('Matches Either', function () {

        let inputString = 're apple, green apple, red apple, green apple, gren apple, gr apple, blue apple, yellow apple';

        //Learning JavaScript
        var regex = /(red|green)/g;
        //Learning JavaScript

        console.log();
        expect(inputString.replace(regex, 'X')).toEqual('re apple, X apple, X apple, X apple, gren apple, gr apple, blue apple, yellow apple');
    });

    it('2 XX', function () {
        expect(1).toEqual(1);
    });

    it('3 XX', function () {
        expect(1).toEqual(1);
    });

    it('4 XX', function () {
        expect(1).toEqual(1);
    });

});