describe( 'Master - Reg Expr - Reg Expr Methods', function () {


    beforeEach(function () {

    });

    it('(execMethod) - Exec', function () {

        let football = 'table football, foosball';
        let  empty = [];
        let execMethod;

        //Learning JavaScript
        var regex = RegExp("foo*", "g");
        //Learning JavaScript

        while ((execMethod = regex.exec(football)) !== null) {
            empty.push(execMethod);
        };

        //['foo', index: 6, input: 'table football, foosball', groups: undefined]"

        expect(empty[0].index).toEqual(6);

        //['foo', index: 16, input: 'table football, foosball', groups: undefined]"

        expect(empty[1].index).toEqual(16);


    });

    it(' (regExprReturnBoolean) - Test', function () {

        let football = 'table football, foosball';
        let empty = [];
        let returnBoolean;

        //Learning JavaScript
        var regex = new RegExp("foo*", "g");
        //Learning JavaScript

        while ( returnBoolean = regex.test(football)){
            expect(returnBoolean).toEqual(true);

            empty.push({ "lastIndex":regex.lastIndex });
        };

        expect(returnBoolean).toEqual(false);

        expect(empty[0].lastIndex).toEqual(9);
        expect(empty[1].lastIndex).toEqual(19);

    });

});
