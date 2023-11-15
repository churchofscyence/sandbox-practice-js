describe( 'Master - Reg Expr - Groups And Ranges', function () {

    beforeEach(function () {

    });

    it('(replaceMethod) - Matches Either', function () {

        let apple = 're apple, green apple, red apple, green apple, gren apple, gr apple, blue apple, yellow apple';

        let replaceMethod = apple.replace(/(red|green)/g, 'X');

        expect(replaceMethod).toEqual('re apple, X apple, X apple, X apple, gren apple, gr apple, blue apple, yellow apple');
    });

    it('(replaceMethod) - Matches Any One', function () {

        let river = 'With no rivers or wells for fresh water';

        let replaceMethod = river.replace(/[aeiouy]/g, 'X');

        expect(replaceMethod).toEqual('WXth nX rXvXrs Xr wXlls fXr frXsh wXtXr');
    });

    it('(replaceMethod) - Negated', function () {

        let brisket = 'brisket chop non-profit';

        let replaceMethod = brisket.replace(/[^aeiouy]/g, 'X');

        expect(replaceMethod).toEqual('XXiXXeXXXXoXXXoXXXXoXiX');
    });

    it('(replaceMethod) - Capturing Group', function () {

        let mom = 'Mom loves Mom is the sentences';

        let replaceMethod = mom.replace(/(Mom) loves \1/, 'X');

        expect(replaceMethod ).toEqual('X is the sentences');
    });

});
