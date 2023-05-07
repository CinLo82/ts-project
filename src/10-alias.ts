(( )=> {
    type userID = string | number;

    let userId: userID;

    // literal types
    type Sizes =  'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
   // shirtSize = 'sdfsdfsdfsd';

   function greeting(userId: userID, size: Sizes) {
    if (typeof userId === 'string') {
        console.log(`${userId.toLowerCase()}`)
        }
    }
    greeting(36523, 'S');
})();