describe( 'Master - Reg Expr - Groups And Ranges', function () {

    beforeEach(function () {

    });

    it('Matches Either', function () {

        let inputString = 're apple, green apple, red apple, green apple, gren apple, gr apple, blue apple, yellow apple';

        //Learning JavaScript
        var regex = /(red|green)/g;
        //Learning JavaScript

        expect(inputString.replace(regex, 'X')).toEqual('re apple, X apple, X apple, X apple, gren apple, gr apple, blue apple, yellow apple');
    });

    it('Matches Any One', function () {
        let inputString = 'With no rivers or wells for fresh water';

        //Learning JavaScript
        var regex = /[aeiouy]/g;
        //Learning JavaScript

        expect(inputString.replace(regex, 'X')).toEqual('WXth nX rXvXrs Xr wXlls fXr frXsh wXtXr');
    });

    it('Negated', function () {
        let inputString = 'brisket chop non-profit';

        //Learning JavaScript
        var regex = /[^aeiouy]/g;
        //Learning JavaScript

        expect(inputString.replace(regex, 'X')).toEqual('XXiXXeXXXXoXXXoXXXXoXiX');
    });

    it('Capturing Group', function () {
        let inputString = 'Mom loves Mom is the sentences';

        //Learning JavaScript
        var regex = /(Mom) loves \1/;
        //Learning JavaScript

        expect(inputString.replace(regex, 'X')).toEqual('X is the sentences');
    });

});