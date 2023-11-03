describe( 'Master - Reg Expr - Modifiers', function () {

    beforeEach(function () {

    });

    it('Start End Indices', function () {

        let foo = 'foo bar foo bar foo';

        let result = foo.replace(/foo/gd, 'X')

        expect(result).toEqual('X bar X bar X');
    });

    it('Global', function () {

        let foo = 'foo bar foo bar foo';

        let result = foo.replace(/foo/g, 'X')

        expect(result).toEqual('X bar X bar X');
    });

    it('Case Insensitive', function () {

        let foo_case = 'Foo bar foo bar foo';

        let result = foo_case.replace(/foo/gi, 'X')

        expect(result).toEqual('X bar X bar X');
    });

    it('Multi Line Search', function () {

        let cool = 'A foo is cool\nA foo is big';

        let result = cool.replace(/foo/gm, 'X')

        expect(result).toEqual('A X is cool\nA X is big');
    });


});
