 //linear seach
 const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];
 const findIndex = (num) => {
     for (let i = 0; i < data.length; i++) {
         if (data[i] === num) {
             console.log(`${num} found at index ${i}`)
         }
     }
 };

 // looks thru each index until the desired result is met
 // slow and time consuming
 // will continue to run unless "return;" is added
 // complexity of O(n)