const tail = function(A) {
  if (Array.isArray(A))  {
    return A.slice(1);
  } else   {
    return [];
  }
};

module.exports = tail; 
