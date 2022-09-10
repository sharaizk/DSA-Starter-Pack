const myArray = [11, 3, 23, 7, 17];

myArray.push(17);

console.log(myArray);

/* 
    With push we didn't have to reindex any of the array values so it is O(1)
*/

myArray.pop();

/* 
    With pop we didn't have to reindex any of the array values so it is O(1)
*/

myArray.shift();

/* 
   With shift and unshift, we have to reindex everything index as there has been change in the values but not in the indexes. So it will be O(n)
*/

myArray.splice(1, 0, "Hi");

/* 
    WE ARE PUTTING AT INDEX 1 AND REMOVING NOTHING
    THIS WILL ADD THE HI IN INDEX 1 SO REINDEXING HAVE TO BE DONE O(N)
*/

/* 
    IF WE REMOVE/ADD ANYTHING AT THE END OF THE ARRAY IT WILL BE ALWAYS BE O(1)

    IF WE REMOVE/ADD ANYTHING AT THE START OF THE ARRAY IT WILL BE O(N) BECAUSE OF REINDEXING

    IF WE REMOVE/ADD ANYTHING AT THE MIDDLE OF THE ARRAY IT WILL BE O(N)

    IF WE SEARCH BY VALUES IT WILL BE O(N)

    IF WE SEARCH BY INDEX IT WILL BE O(1)
*/
