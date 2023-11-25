describe( 'Master - Reg Expr - String Methods', function () {

    beforeEach(function () {

    });

    it('(matchMethod) - Match', function () {

        let fox = 'The quick brown fox jumps over the lazy dog. It barked.';

        let matchMethod = fox.match(/[A-Z]/g)

        expect(matchMethod).toEqual(['T','I']);
    });
    it('(matchAllMethod) - Match All', function () {

        //https://www.programiz.com/javascript/library/string/matchall

        let testTwo = 'test1test2';
        let matchAllMethod = [...testTwo.matchAll(/t(e)(st(\d?))/g)];

        for(let i=0; i < matchAllMethod.length; i++){
            console.log("matchAllMethod["+i+"]: ");
            console.log(matchAllMethod[i])
        }

        expect(matchAllMethod.length).toEqual(2);
    });
    it('(replaceMethod) - Replace', function () {

        let  lazyDog = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

        let replaceMethod = lazyDog.replace("dog", 'X');

        expect(replaceMethod).toEqual('The quick brown fox jumps over the lazy X. If the dog reacted, was it really lazy?');

    });
    it('(replaceAllMethod) - Replace', function () {

        let  lazyDog = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

        let replaceAllMethod = lazyDog.replaceAll("dog", 'X');

        expect(replaceAllMethod).toEqual('The quick brown fox jumps over the lazy X. If the X reacted, was it really lazy?');

    });
    it('(searchMethod) - Search', function () {

        let  fox = 'The quick brown fox jumps over the lazy dog. It barked.';

        let searchMethod = fox.search("dog");

        expect(searchMethod).toEqual(40);

    });

});
