describe( 'Master - String - Search Calls', function () {


    beforeEach(function () {

    });

    it('Ends With', function () {

        let resultBoolean = "Hello World".endsWith("World");

        expect(resultBoolean).toBeTrue();

    });

    it('Include', function () {

        let resultBoolean = "The rain in SPAIN stays mainly in the plain".includes("SPAIN");

        expect(resultBoolean).toBeTrue();

    });

    it('Index Of', function () {

        let resultNumber= "The rain in SPAIN stays mainly in the plain".indexOf ("SPAIN");

        expect(resultNumber).toEqual(12);

    });

    it('Last Index Of', function () {

        let resultNumber = "Hello planet earth, you are a great planet.".lastIndexOf("planet");

        expect(resultNumber).toEqual(36);

    });

    it('Locale Compare', function () {

        let resultNumber = "A".localeCompare("C");

        expect(resultNumber).toEqual(-1);

    });

    it('Match', function () {

        let resultString = "The rain in SPAIN stays mainly in the plain".match(/ain/g);

        expect(resultString).toEqual(['ain','ain','ain']);

    });

    it('Replace', function () {

        let resultString = "Hello World".replace("World", "Tom");

        expect(resultString).toEqual('Hello Tom');

    });

    it('Search', function () {

        let resultNumber = "Hello World".search("World");

        expect(resultNumber).toEqual(6);

    });

    it('Start With', function () {

        let resultBoolean = "The rain in SPAIN stays mainly in the plain".startsWith("The");

        expect(resultBoolean).toBeTrue();

    });


});
