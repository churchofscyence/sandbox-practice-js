describe( 'Master - Reg Expr - Quantifiers', function () {

    beforeEach(function () {

    });

    it('(replaceMethod) - At Least One', function () {

        let w3Schools_Hellooo = 'Hellooo World! Hello W3Schools!';

        let replaceMethod = w3Schools_Hellooo.replace(/o+/g, 'X')

        expect(replaceMethod).toEqual('HellX WXrld! HellX W3SchXls!');
    });

    it('(replaceMethod) - Zero Or More', function () {

        let decimalPlace = '1, 100 or 1000?';

        let replaceMethod = decimalPlace.replace(/10*/g, 'X')

        expect(replaceMethod).toEqual('X, X or X?');
    });

    it('(replaceMethod) - Zero Or One', function () {

        let decimalPlace = '1, 100 or 1000?';

        let replaceMethod = decimalPlace.replace(/10?/g, 'X')

        expect(replaceMethod).toEqual('X, X0 or X00?');
    });

    it('(replaceMethod) - Sequence Of - Four', function () {

        let decimalPlace = '1, 100 or 1000?';

        let replaceMethod = decimalPlace.replace(/\d{4}/g, 'X')

        expect(replaceMethod).toEqual('1, 100 or X?');
    });

    it('(replaceMethod) - Sequence Of - Three - Four', function () {

        let decimalPlace = '1, 100 or 1000?';

        let replaceMethod = decimalPlace.replace(/\d{3,4}/g, 'X')

        expect(replaceMethod).toEqual('1, X or X?');
    });


    it('(replaceMethod) - Sequence Of - Three', function () {

        let decimalPlace = '1, 100 or 1000?';

        let replaceMethod = decimalPlace.replace(/\d{3,}/g, 'X')

        expect(replaceMethod).toEqual('1, X or X?');
    });

    it('(replaceMethod) - Specific String', function () {

        let isAll = 'Is this all there is';

        let replaceMethod = isAll.replace(/is(?= all)/g, 'X')

        expect(replaceMethod).toEqual('Is thX all there is');
    });


    it('(replaceMethod) - Non Specific String', function () {

        let isAll = 'Is this all there is';

        let replaceMethod = isAll.replace(/is(?! all)/gi, 'X')

        expect(replaceMethod).toEqual('X this all there X');
    });

});
