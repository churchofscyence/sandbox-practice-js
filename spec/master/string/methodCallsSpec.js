describe( 'Master - String - Method Calls', function () {


    beforeEach(function () {

    });

    it('Character At', function () {

        let resultString = "Hello World".charAt(0);

        expect(resultString).toEqual('H');

    });

    it('Character Code At', function () {

        let resultNumber = "Hello World".charCodeAt(0);

        expect(resultNumber).toEqual(72);

    });

    it('Concatenate', function () {

        let resultString = "Tom".concat(" ","Bob"," ", "Smith");

        expect(resultString).toEqual('Tom Bob Smith');

    });

    it('From Character Code', function () {

        let resultString = String.fromCharCode(65);

        expect(resultString).toEqual('A');

    });

    it('Length', function () {

        let resultNumber = "Hello World".length;

        expect(resultNumber).toEqual(11);

    });

    it('Repeat', function () {

        let resultString = "Hello World".repeat(2);

        expect(resultString).toEqual('Hello WorldHello World');

    });

    it('Slice', function () {

        let resultString = "Hello World".slice(0, 5);

        expect(resultString).toEqual('Hello');

    });

    it('Splice', function () {

        let resultArray = "The rain in SPAIN stays mainly in the plain".split(" ");

        expect(resultArray).toEqual(['The','rain','in','SPAIN','stays','mainly','in','the','plain']);

    });

    it('Substr', function () {

        let resultString = "Hello World".substr(1, 4);

        expect(resultString).toEqual('ello');

    });

    it('Substring', function () {

        let resultString = "Hello World".substring(1, 4);

        expect(resultString).toEqual('ell');

    });

    it('To Lower Case', function () {

        let resultString = "Hello World".toLowerCase();

        expect(resultString).toEqual('hello world');

    });

    it('To String', function () {

        let resultString = "Hello World".toString();

        expect(resultString).toEqual('Hello World');

    });

    it('To Upper Case', function () {

        let resultString = "Hello World".toUpperCase();

        expect(resultString).toEqual('HELLO WORLD');

    });

    it('Trim', function () {

        let resultString = " Hello World ".trim();

        expect(resultString).toEqual('Hello World');

    });

    it('Value Of', function () {

        let resultString = typeof "Hello World".valueOf();

        expect(resultString).toEqual('string');

    });

});
