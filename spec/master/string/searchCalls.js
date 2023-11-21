describe( 'Master - String - Search Calls', function () {


    beforeEach(function () {

    });

    it('(resultBoolean) - Ends With', function () {

        let helloWorld = 'Hello World';

        let resultBoolean = helloWorld.endsWith("World");

        expect(resultBoolean).toBeTrue();

    });

    it('(resultBoolean) - Include', function () {

        let spain = 'The rain in SPAIN stays mainly in the plain';

        let resultBoolean = spain.includes("SPAIN");

        expect(resultBoolean).toBeTrue();

    });

    it('(resultNumber) - Index Of', function () {

        let spain = 'The rain in SPAIN stays mainly in the plain';

        let resultNumber = spain.indexOf ("SPAIN");

        expect(resultNumber).toEqual(12);

    });

    it('(resultNumber) - Last Index Of', function () {

        let planet = 'Hello planet earth, you are a great planet.';

        let resultNumber = planet.lastIndexOf("planet");

        expect(resultNumber).toEqual(36);

    });

    it('(resultNumber) - Locale Compare', function () {

        let a ='A';

        let resultNumber = a.localeCompare("C");

        expect(resultNumber).toEqual(-1);

    });

    it('(resultArray) - Match', function () {

        let spain = 'The rain in SPAIN stays mainly in the plain';

        let resultArray = spain.match(/ain/g);

        expect(resultString).toEqual(['ain','ain','ain']);

    });

    it('(resultString) - Replace', function () {

        let helloWorld = 'Hello World';

        let resultString = helloWorld.replace("World", "Tom");

        expect(resultString).toEqual('Hello Tom');

    });

    it('(resultNumber) - Search', function () {

        let helloWorld = 'Hello World';

        let resultNumber = helloWorld.search("World");

        expect(resultNumber).toEqual(6);

    });

    it('(resultBoolean) - Start With', function () {

        let spain = 'The rain in SPAIN stays mainly in the plain';

        let resultBoolean = spain.startsWith("The");

        expect(resultBoolean).toBeTrue();

    });


});
