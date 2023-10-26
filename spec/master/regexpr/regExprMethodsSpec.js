describe( 'Master - Reg Expr - Reg Expr Methods', function () {


    beforeEach(function () {

    });

    it('Exec', function () {

        let inputString = 'table football, foosball';
        let outputArray = [];
        let tempArray;

        //Learning JavaScript
        var regex = RegExp("foo*", "g");
        //Learning JavaScript

        while ((tempArray = regex.exec(inputString)) !== null) {
            outputArray.push(tempArray);
        };

        //['foo', index: 6, input: 'table football, foosball', groups: undefined]"

        expect(outputArray[0].index).toEqual(6);

        //['foo', index: 16, input: 'table football, foosball', groups: undefined]"

        expect(outputArray[1].index).toEqual(16);


    });

    it('Test', function () {

        let inputString = 'table football, foosball';
        let outputArray = [];

        //Learning JavaScript
        var regex = new RegExp("foo*", "g");
        //Learning JavaScript

        while (regex.test(inputString)){
            outputArray.push({ "lastIndex":regex.lastIndex });
        };

        expect(outputArray[0].lastIndex).toEqual(9);
        expect(outputArray[1].lastIndex).toEqual(19);

    });

});