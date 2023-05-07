(() => {
    let userId: string | number;
    userId = 1212;
    userId = 'hsgdhas';

    function greeting(myText: string | number) {
        if (typeof myText === 'string') {
            console.log(`${myText.toLowerCase()}`)
        } else {
            console.log(`number ${myText.toFixed(1)}`)
            
        }
    }
    greeting(12.1232423443212);
    greeting('hsgdhas');
})();