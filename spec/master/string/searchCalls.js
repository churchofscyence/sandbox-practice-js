describe( 'Master - String - Search Calls', function () {


    beforeEach(function () {

    });

    it('(resultBoolean) - Ends With', function () {

        let resultBoolean = "Hello World".endsWith("World");

        expect(resultBoolean).toBeTrue();

    });

    it('(resultBoolean) - Include', function () {

        let resultBoolean = "The rain in SPAIN stays mainly in the plain".includes("SPAIN");

        expect(resultBoolean).toBeTrue();

    });

    it('(resultNumber) - Index Of', function () {

        let resultNumber = "The rain in SPAIN stays mainly in the plain".indexOf ("SPAIN");

        expect(resultNumber).toEqual(12);

    });

    it('(resultNumber) - Last Index Of', function () {

        let resultNumber = "Hello planet earth, you are a great planet.".lastIndexOf("planet");

        expect(resultNumber).toEqual(36);

    });

    it('(resultNumber) - Locale Compare', function () {

        let resultNumber = "A".localeCompare("C");

        expect(resultNumber).toEqual(-1);

    });

    it('(resultString) - Match', function () {

        let resultString = "The rain in SPAIN stays mainly in the plain".match(/ain/g);

        expect(resultString).toEqual(['ain','ain','ain']);

    });

    it('(resultString) - Replace', function () {

        let resultString = "Hello World".replace("World", "Tom");

        expect(resultString).toEqual('Hello Tom');

    });

    it('(resultNumber) - Search', function () {

        let resultNumber = "Hello World".search("World");

        expect(resultNumber).toEqual(6);

    });

    it('(resultBoolean) - Start With', function () {

        let resultBoolean = "The rain in SPAIN stays mainly in the plain".startsWith("The");

        expect(resultBoolean).toBeTrue();

    });


});
