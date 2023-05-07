(() => {
    const calcTotal = (prices: number[]) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        })
        return total;
    }
   
    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    }

    printTotal([1,3,4,5,5]);
    
})();