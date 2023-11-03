describe( 'Master - Array - Function Calls', function () {

    let fruits;
    let peoples;
    let emptyArray;

    beforeEach(function () {
        fruits = [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        peoples = ['Cecilie', 'Lone', 'Emil','Tobias', 'Linus'];
        emptyArray = [];
    });

    it('(resultBoolean) - Every', function () {

        function checkNames(name) {

            return name.length > 9;

        } ;

        let resultBoolean = fruits.every(checkNames);

        expect(resultBoolean).toBeFalsy();
    });

    it('(resultArray) - Filter', function () {

        function checkNames(name) {

            return name.length > 9;

        } ;

        let resultArray = fruits.filter(checkNames);

        expect(resultArray).toEqual(['Watermelon']);
    });

    it('(resultString) - Find', function () {

        function checkNames(name) {

            return name.length > 9;

        } ;

        let resultString = fruits.find(checkNames);

        expect(resultString).toEqual('Watermelon');
    });

    it('(resultNumber) - Find Index', function () {

        function checkNames(name) {

            return name.length > 9;

        } ;

        let resultNumber = fruits.findIndex(checkNames);

        expect(resultNumber).toEqual(6);
    });

    it('(resultArray) - From', function () {

        var appendName = {

            do(firstName) { return firstName + " " + this.lastName; }

        } ;

        let resultArray = Array.from( peoples, appendName.do, {lastName:"Smith"});

        expect(resultArray).toEqual(['Cecilie Smith', 'Lone Smith', 'Emil Smith','Tobias Smith', 'Linus Smith']);
    });

    it('(emptyArray) - Reduce', function () {

        function ucase (total,currentValue, index,arr) {

            emptyArray.push( index + " : " + currentValue) ;

        } ;

        fruits.reduce(ucase,0);

        expect(emptyArray).toEqual([ '0 : Banana', '1 : Orange','2 : Melon',
            '3 : Apple', '4 : Mango', '5 : Berries', '6 : Watermelon']);
    });

    it('(emptyArray) - Reduce Right', function () {

        function ucase (total,currentValue, index,arr) {

            emptyArray.push( index + " : " + currentValue) ;

        } ;

        fruits.reduceRight(ucase,0);

        expect(emptyArray).toEqual([ '6 : Watermelon', '5 : Berries', '4 : Mango',
            '3 : Apple', '2 : Melon','1 : Orange','0 : Banana']);
    });
    it('(resultBoolean) - Some', function () {

        function checkNames(name) {

            return name.length> 9;

        } ;

        let resultBoolean = fruits.some(checkNames);

        expect(resultBoolean).toBeTrue();
    });
});
