describe( 'Master - Reg Expr - Meta Characters', function () {

    beforeEach(function () {

    });

    it('(replaceMethod) - Single', function () {

        let hot = 'That hot!';

        let replaceMethod = hot.replace(/h.t/g, 'X')

        expect(replaceMethod).toEqual('TX X!');
    });

    it('(replaceMethod) - Word', function () {

        let hundredPercent = 'Give 100%!';

        let replaceMethod = hundredPercent.replace(/\w/g, 'X')

        expect(replaceMethod).toEqual('XXXX XXX%!');
    });

    it('(replaceMethod) - Non Word', function () {
        let hundredPercent = 'Give 100%!';

        let replaceMethod = hundredPercent.replace(/\W/g, 'X')

        expect(replaceMethod).toEqual('GiveX100XX');
    });

    it('(replaceMethod) - Digit', function () {
        let hundredPercent = 'Give 100%!';

        let replaceMethod = hundredPercent.replace(/\d/g, 'X')

        expect(replaceMethod).toEqual('Give XXX%!');
    });

    it('(replaceMethod) - Non Digit', function () {
        let hundredPercent = 'Give 100%!';

        let replaceMethod = hundredPercent.replace(/\D/g, 'X')

        expect(replaceMethod).toEqual('XXXXX100XX');
    });

    it('(replaceMethod) - Whitespace', function () {
        let hundredPercent = 'Give 100%!';

        let replaceMethod = hundredPercent.replace(/\s/g, 'X')

        expect(replaceMethod).toEqual('GiveX100%!');
    });

    it('(replaceMethod) - Non Whitespace', function () {
        let hundredPercent = 'Give 100%!';

        let replaceMethod = hundredPercent.replace(/\S/g, 'X')

        expect(replaceMethod).toEqual('XXXX XXXXX');
    });

    it('(replaceMethod) - Beginning End Word - Beginning', function () {

        let look = 'HELLO, LOOK AT YOU';

        let replaceMethod = look.replace(/\bLO/, 'X')

        expect(replaceMethod).toEqual('HELLO, XOK AT YOU');
    });

    it('(replaceMethod) - Beginning End Word - End', function () {

        let look = 'HELLO, LOOK AT YOU';

        let replaceMethod = look.replace(/LO\b/, 'X')

        expect(replaceMethod).toEqual('HELX, LOOK AT YOU');
    });

    it('(replaceMethod) - Non Beginning End Word - Beginning', function () {

        let look = 'HELLO, LOOK AT YOU';

        let replaceMethod = look.replace(/\BLO/, 'X')

        expect(replaceMethod).toEqual('HELX, LOOK AT YOU');
    });

    it('(replaceMethod) - Non Beginning End Word - End', function () {

        let look = 'HELLO, LOOK AT YOU';

        let replaceMethod = look.replace(/LO\B/, 'X')

        expect(replaceMethod).toEqual('HELLO, XOK AT YOU');
    });

    it('(replaceMethod) - Null', function () {

        let w3Schools_Null = 'Visit W3Schools.\\0Learn Javascript.';

        let replaceMethod = w3Schools_Null.replace(/\\0/, 'X')

        expect(replaceMethod).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('(replaceMethod) - New Line', function () {

        let w3Schools_Line = 'Visit W3Schools.\\nLearn Javascript.';

        let replaceMethod = w3Schools_Line.replace(/\\n/, 'X')

        expect(replaceMethod).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('(replaceMethod) - Form Feed', function () {

        let w3Schools__Feed = 'Visit W3Schools.\\fLearn Javascript.';

        let replaceMethod = w3Schools__Feed.replace(/\\f/, 'X')

        expect(replaceMethod).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('(replaceMethod) - Carriage Return', function () {

        let w3Schools_Feed = 'Visit W3Schools.\\rLearn Javascript.';

        let replaceMethod = w3Schools_Feed.replace(/\\r/, 'X')

        expect(replaceMethod).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('(replaceMethod) - Tab', function () {

        let w3Schools_Tab = 'Visit W3Schools.\\tLearn Javascript.';

        let replaceMethod = w3Schools_Tab.replace(/\\t/, 'X')

        expect(replaceMethod).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('(replaceMethod) - Vertical Tab', function () {

        let w3Schools_Tab = 'Visit W3Schools.\\VLearn Javascript.';

        let replaceMethod = w3Schools_Tab.replace(/\\V/, 'X')

        expect(replaceMethod).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('(replaceMethod) - Octal Number', function () {

        let w3Schools = 'Visit W3Schools. Hello World!';

        let replaceMethod = w3Schools.replace(/\127/g, 'X')

        expect(replaceMethod).toEqual('Visit X3Schools. Hello Xorld!');
    });

    it('(replaceMethod) - Hexadecimal Number', function () {

        let w3Schools = 'Visit W3Schools. Hello World!';

        let replaceMethod = w3Schools.replace(/W/g, 'X')

        expect(replaceMethod).toEqual('Visit X3Schools. Hello Xorld!');
    });

});
