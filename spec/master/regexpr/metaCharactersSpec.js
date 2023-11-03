describe( 'Master - Reg Expr - Meta Characters', function () {

    beforeEach(function () {

    });

    it('Single', function () {

        let hot = 'That hot!';

        let result = hot.replace(/h.t/g, 'X')

        expect(result).toEqual('TX X!');
    });

    it('Word', function () {

        let hundredPercent = 'Give 100%!';

        let result = hundredPercent.replace(/\w/g, 'X')

        expect(result).toEqual('XXXX XXX%!');
    });

    it('Non Word', function () {
        let hundredPercent = 'Give 100%!';

        let result = hundredPercent.replace(/\W/g, 'X')

        expect(result).toEqual('GiveX100XX');
    });

    it('Digit', function () {
        let hundredPercent = 'Give 100%!';

        let result = hundredPercent.replace(/\d/g, 'X')

        expect(result).toEqual('Give XXX%!');
    });

    it('Non Digit', function () {
        let hundredPercent = 'Give 100%!';

        let result = hundredPercent.replace(/\D/g, 'X')

        expect(result).toEqual('XXXXX100XX');
    });

    it('Whitespace', function () {
        let hundredPercent = 'Give 100%!';

        let result = hundredPercent.replace(/\s/g, 'X')

        expect(result).toEqual('GiveX100%!');
    });

    it('Non Whitespace', function () {
        let hundredPercent = 'Give 100%!';

        let result = hundredPercent.replace(/\S/g, 'X')

        expect(result).toEqual('XXXX XXXXX');
    });

    it('Beginning End Word - Beginning', function () {

        let look = 'HELLO, LOOK AT YOU';

        let result = look.replace(/\bLO/, 'X')

        expect(result).toEqual('HELLO, XOK AT YOU');
    });

    it('Beginning End Word - End', function () {

        let look = 'HELLO, LOOK AT YOU';

        let result = look.replace(/LO\b/, 'X')

        expect(result).toEqual('HELX, LOOK AT YOU');
    });

    it('Non Beginning End Word - Beginning', function () {

        let look = 'HELLO, LOOK AT YOU';

        let result = look.replace(/\BLO/, 'X')

        expect(result).toEqual('HELX, LOOK AT YOU');
    });

    it('Non Beginning End Word - End', function () {

        let look = 'HELLO, LOOK AT YOU';

        let result = look.replace(/LO\B/, 'X')

        expect(result).toEqual('HELLO, XOK AT YOU');
    });

    it('Null', function () {

        let w3Schools_Null = 'Visit W3Schools.\\0Learn Javascript.';

        let result = w3Schools_Null.replace(/\\0/, 'X')

        expect(result).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('New Line', function () {

        let w3Schools_Line = 'Visit W3Schools.\\nLearn Javascript.';

        let result = w3Schools_Line.replace(/\\n/, 'X')

        expect(result).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('Form Feed', function () {

        let w3Schools__Feed = 'Visit W3Schools.\\fLearn Javascript.';

        let result = w3Schools__Feed.replace(/\\f/, 'X')

        expect(result).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('Carriage Return', function () {

        let w3Schools_Feed = 'Visit W3Schools.\\rLearn Javascript.';

        let result = w3Schools_Feed.replace(/\\r/, 'X')

        expect(result).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('Tab', function () {

        let w3Schools_Tab = 'Visit W3Schools.\\tLearn Javascript.';

        let result = w3Schools_Tab.replace(/\\t/, 'X')

        expect(result).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('Vertical Tab', function () {

        let w3Schools_Tab = 'Visit W3Schools.\\VLearn Javascript.';

        let result = w3Schools_Tab.replace(/\\V/, 'X')

        expect(result).toEqual('Visit W3Schools.XLearn Javascript.');
    });

    it('Octal Number', function () {

        let w3Schools = 'Visit W3Schools. Hello World!';

        let result = w3Schools.replace(/\127/g, 'X')

        expect(result).toEqual('Visit X3Schools. Hello Xorld!');
    });

    it('Hexadecimal Number', function () {

        let w3Schools = 'Visit W3Schools. Hello World!';

        let result = w3Schools.replace(/W/g, 'X')

        expect(result).toEqual('Visit X3Schools. Hello Xorld!');
    });

});
