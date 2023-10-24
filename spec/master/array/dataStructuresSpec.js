describe( 'Master - Array - Data Structures', function (){

    let fruits;
    let empty;
    let peoples;
    let unique_integer;


    beforeEach(function() {
        fruits = [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        empty = [];
        peoples = ['Cecilie', 'Lone', 'Emil','Tobias', 'Linus'];
        unique_integer = [3,8,13,11,4,6,2,1,12,15,14,5,7,10,9];
    });

    it('Entries', function (){

        for (const [index, element] of fruits.entries()) {

            empty.push( index + " : " + element);

        } ;

        expect([ '0 : Banana', '1 : Orange','2 : Melon', '3 : Apple',
            '4 : Mango', '5 : Berries', '6 : Watermelon']).toEqual(empty) ;

    });

    it('For Each', function (){

        function checkNames(item,index) {

            empty.push( index + " : " + item );

        } ;

        fruits.forEach(checkNames);

        expect([ '0 : Banana', '1 : Orange','2 : Melon', '3 : Apple',
            '4 : Mango', '5 : Berries', '6 : Watermelon']).toEqual(empty) ;

    });

    it('Keys', function (){

        for (let x of fruits.keys()) {

            empty.push(x);

        } ;

        expect([ 0, 1,2, 3,4, 5, 6]).toEqual(empty) ;

    });

    it('Map', function (){

        function addLastName (currentValue, index, arr) {

            empty.push(currentValue + " " + this.lastName);

        } ;

        peoples.map(addLastName, {lastName: "Smith"});

        expect(['Cecilie Smith', 'Lone Smith', 'Emil Smith','Tobias Smith', 'Linus Smith']).toEqual(empty) ;

    });

    it('Pop', function (){

        let resultString = fruits.pop();

        expect("Watermelon").toEqual(resultString) ;

    });

    it('Prototype', function (){

        Array.prototype.ucase = function() {

            for (let i = 0; i < this.length; i++) { this[i] = this[i].toUpperCase(); }

        } ;

        fruits.ucase();

        expect([ 'BANANA', 'ORANGE','MELON', 'APPLE', 'MANGO', 'BERRIES', 'WATERMELON']).toEqual(fruits) ;

    });

    it('Push', function (){

        fruits.push("Kiwi");

        expect([ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon', 'Kiwi']).toEqual(fruits) ;

    });

    it('Shift', function (){

        let resultString = fruits.shift();

        expect('Banana').toEqual(resultString) ;

    });

    it('Sort', function (){

        function ascending (a, b) {

            return a-b;

        } ;

        unique_integer.sort(ascending);

        expect([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).toEqual(unique_integer) ;

    });

    it('Unshift', function (){

        fruits.unshift("Lemon","Pineapple");

        expect([ 'Lemon', 'Pineapple','Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon']).toEqual(fruits) ;

    });
});
