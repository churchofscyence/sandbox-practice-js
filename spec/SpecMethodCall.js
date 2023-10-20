describe( 'Method Call', function (){

    let fruits;
    let peoples;

    beforeEach(function() {
        fruits = [ 'Banana', 'Orange','Melon', 'Apple', 'Mango', 'Berries', 'Watermelon'];
        peoples = ['Cecilie', 'Lone', 'Emil','Tobias', 'Linus'];
    });

    it('Concatenate', function (){

        let result = fruits.concat( peoples );

        let fruitsStr = fruits.join();
        let peoplesStr = peoples.join();

        expect(fruitsStr +","+ peoplesStr ).toEqual(result.join()) ;

    });

});
