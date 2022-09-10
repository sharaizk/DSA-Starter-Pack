function addItems(n) {
  return n + n;
}

addItems(2);
// Since there is only 1 operation of add n+n hence we say it O(1)

function addItems(n) {
  return n + n + n;
}

addItems(2);

// Here we have 2 add operations which should make it O(2) but we will simplify it to O(1
// O(1) is also referred as constant time
