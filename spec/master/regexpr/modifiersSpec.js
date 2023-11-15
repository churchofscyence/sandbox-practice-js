describe( 'Master - Reg Expr - Modifiers', function () {

    beforeEach(function () {

    });

    it('(replaceMethod) - Start End Indices', function () {

        let foo = 'foo bar foo bar foo';

        let replaceMethod = foo.replace(/foo/gd, 'X')

        expect(replaceMethod).toEqual('X bar X bar X');
    });

    it('(replaceMethod) - Global', function () {

        let foo = 'foo bar foo bar foo';

        let replaceMethod = foo.replace(/foo/g, 'X')

        expect(replaceMethod).toEqual('X bar X bar X');
    });

    it('(replaceMethod) - Case Insensitive', function () {

        let foo_case = 'Foo bar foo bar foo';

        let replaceMethod = foo_case.replace(/foo/gi, 'X')

        expect(replaceMethod).toEqual('X bar X bar X');
    });

    it('(replaceMethod) - Multi Line Search', function () {

        let cool = 'A foo is cool\nA foo is big';

        let replaceMethod = cool.replace(/foo/gm, 'X')

        expect(replaceMethod).toEqual('A X is cool\nA X is big');
    });


});
