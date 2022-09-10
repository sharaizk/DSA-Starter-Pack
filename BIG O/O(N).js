function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10);
// ANSWER: 0,1,2,3,4,5,6,7,8,9

/* 
    This is O(n) operations as we passed it a number N and it ran for N number of times
*/

// DROP CONSTANTS:

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems(3);
// ANSWER: 0,1,2 0,1,2

/* 
    So, our code ran for N+N=2N, So it becomes O(2N) but since there is a constant 2 with O(2N), we will drop it
    hence it becomes; O(N)
*/
