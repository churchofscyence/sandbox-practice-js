describe( 'Master - Reg Expr - Quantifiers', function () {

    beforeEach(function () {

    });

    it('At Least One', function () {

        let w3Schools_Hellooo = 'Hellooo World! Hello W3Schools!';

        let result = w3Schools_Hellooo.replace(/o+/g, 'X')

        expect(result).toEqual('HellX WXrld! HellX W3SchXls!');
    });

    it('Zero Or More', function () {

        let decimalPlace = '1, 100 or 1000?';

        let result = decimalPlace.replace(/10*/g, 'X')

        expect(result).toEqual('X, X or X?');
    });

    it('Zero Or One', function () {

        let decimalPlace = '1, 100 or 1000?';

        let result = decimalPlace.replace(/10?/g, 'X')

        expect(result).toEqual('X, X0 or X00?');
    });

    it('Sequence Of - Four', function () {

        let decimalPlace = '1, 100 or 1000?';

        let result = decimalPlace.replace(/\d{4}/g, 'X')

        expect(result).toEqual('1, 100 or X?');
    });

    it('Sequence Of - Three - Four', function () {

        let decimalPlace = '1, 100 or 1000?';

        let result = decimalPlace.replace(/\d{3,4}/g, 'X')

        expect(result).toEqual('1, X or X?');
    });


    it('Sequence Of - Three', function () {

        let decimalPlace = '1, 100 or 1000?';

        let result = decimalPlace.replace(/\d{3,}/g, 'X')

        expect(result).toEqual('1, X or X?');
    });

    it('Specific String', function () {

        let isAll = 'Is this all there is';

        let result = isAll.replace(/is(?= all)/g, 'X')

        expect(result).toEqual('Is thX all there is');
    });


    it('Non Specific String', function () {

        let isAll = 'Is this all there is';

        let result = isAll.replace(/is(?! all)/gi, 'X')

        expect(result).toEqual('X this all there X');
    });

});
