const middle = function(A) {
  if (A.length < 3) {
    return [];
  } else if (A.length % 2 === 1) {
    return A[(A.length - 1) / 2];
  } else if (A.length % 2 === 0) {
    let B = [A[A.length / 2 - 1] , A[A.length / 2]];
    return B;
  }
};

module.exports = middle;