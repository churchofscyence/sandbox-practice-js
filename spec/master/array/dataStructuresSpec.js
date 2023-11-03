describe( 'Master - Array - Data Structures', function (){

    let fruits;
    let emptyArray;
    let peoples;
    let unique_integer;


    beforeEach(function() {
        fruits = [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        emptyArray = [];
        peoples = ['Cecilie', 'Lone', 'Emil','Tobias', 'Linus'];
        unique_integer = [3,8,13,11,4,6,2,1,12,15,14,5,7,10,9];
    });

    it('(emptyArray) - Entries', function (){

        for (const [index, element] of fruits.entries()) {

            emptyArray.push( index + " : " + element);

        } ;

        expect([ '0 : Banana', '1 : Orange','2 : Melon', '3 : Apple',
            '4 : Mango', '5 : Berries', '6 : Watermelon']).toEqual(emptyArray) ;

    });

    it('(emptyArray) - For Each', function (){

        function checkNames(item,index) {

            emptyArray.push( index + " : " + item );

        } ;

        fruits.forEach(checkNames);

        expect([ '0 : Banana', '1 : Orange','2 : Melon', '3 : Apple',
            '4 : Mango', '5 : Berries', '6 : Watermelon']).toEqual(emptyArray) ;

    });

    it('(emptyArray) - Keys', function (){

        for (let x of fruits.keys()) {

            emptyArray.push(x);

        } ;

        expect([ 0, 1,2, 3,4, 5, 6]).toEqual(emptyArray) ;

    });

    it('(emptyArray) - Map', function (){

        function addLastName (currentValue, index, arr) {

            emptyArray.push(currentValue + " " + this.lastName);

        } ;

        peoples.map(addLastName, {lastName: "Smith"});

        expect(['Cecilie Smith', 'Lone Smith', 'Emil Smith','Tobias Smith', 'Linus Smith']).toEqual(emptyArray) ;

    });

    it('(resultString) - Pop', function (){

        let resultString = fruits.pop();

        expect("Watermelon").toEqual(resultString) ;

    });

    it('(changeArray) - Prototype', function (){

        Array.prototype.ucase = function() {

            for (let i = 0; i < this.length; i++) { this[i] = this[i].toUpperCase(); }

        } ;

        fruits.ucase();

        expect([ 'BANANA', 'ORANGE','MELON', 'APPLE', 'MANGO', 'BERRIES', 'WATERMELON']).toEqual(fruits) ;

    });

    it('(changeArray) - Push', function (){

        fruits.push("Kiwi");

        expect([ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon', 'Kiwi']).toEqual(fruits) ;

    });

    it('(resultString) - Shift', function (){

        let resultString = fruits.shift();

        expect('Banana').toEqual(resultString) ;

    });

    it('(changeArray) - Sort', function (){

        function ascending (a, b) {

            return a-b;

        } ;

        unique_integer.sort(ascending);

        expect([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).toEqual(unique_integer) ;

    });

    it('(changeArray) - Unshift', function (){

        fruits.unshift("Lemon","Pineapple");

        expect([ 'Lemon', 'Pineapple','Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon']).toEqual(fruits) ;

    });
});
