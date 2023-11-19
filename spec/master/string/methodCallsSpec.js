describe( 'Master - String - Method Calls', function () {


    beforeEach(function () {

    });

    it('(resultString) - Character At', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.charAt(0);

        expect(resultString).toEqual('H');

    });

    it('(resultNumber) - Character Code At', function () {

        let helloWorld = 'Hello World';

        let resultNumber = helloWorld.charCodeAt(0);

        expect(resultNumber).toEqual(72);

    });

    it('(resultString) - Concatenate', function () {

        let space = ' ';

        let firstName = 'Tom';
        let middleName = 'Bob';
        let lastName = 'Smith';

        let resultString = firstName.concat(space, middleName, space, lastName);

        expect(resultString).toEqual('Tom Bob Smith');

    });

    it('(resultString) - From Character Code', function () {

        let resultString = String.fromCharCode(65);

        expect(resultString).toEqual('A');

    });

    it('(resultNumber) - Length', function () {

        let helloWorld = 'Hello World';

        let resultNumber = helloWorld.length;

        expect(resultNumber).toEqual(11);

    });

    it('(resultString) - Repeat', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.repeat(2);

        expect(resultString).toEqual('Hello WorldHello World');

    });

    it('(resultString) - Slice', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.slice(0, 5);

        expect(resultString).toEqual('Hello');

    });

    it('(resultArray) - Split', function () {

        let spain = 'The rain in SPAIN stays mainly in the plain';

        let resultArray = spain.split(" ");

        expect(resultArray).toEqual(['The','rain','in','SPAIN','stays','mainly','in','the','plain']);

    });

    it('(resultString) - Substr', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.substr(1, 4);

        expect(resultString).toEqual('ello');

    });

    it('(resultString) - Substring', function () {

        let helloWorld = 'Hello World';

        let resultString = "Hello World".substring(1, 4);

        expect(resultString).toEqual('ell');

    });

    it('(resultString) - To Lower Case', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.toLowerCase();

        expect(resultString).toEqual('hello world');

    });

    it('(resultString) - To String', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.toString();

        expect(resultString).toEqual('Hello World');

    });

    it('(resultString) - To Upper Case', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.toUpperCase();

        expect(resultString).toEqual('HELLO WORLD');

    });

    it('(resultString) - Trim', function () {

        let HelloWorldSpace = ' Hello World ';

        let resultString = HelloWorldSpace.trim();

        expect(resultString).toEqual('Hello World');

    });

    it('(resultString) - Value Of', function () {

        let helloWorld = 'Hello World';

        let resultString = typeof helloWorld.valueOf();

        expect(resultString).toEqual('string');

    });

});
