function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

logItems(3);

// ANSWER:
/* 
    0,0
    0,1
    0,2
    1,0
    ..
*/

/* 
    So our code ran for n*n which becomes n^2. This becomes O(n^2)
*/

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; j++) {
        console.log(i, j, k);
      }
    }
  }
}

logItems(10);
// ANSWER:
/* 
    0,0,0
    0,0,1
    .....
*/
/* 
    So our code ran for n*n*n which becomes n^3 but we will change it to O(n^2). It doesn't matter if it is n^2 or n^3 or so on. It will always be O(n^2).
*/
