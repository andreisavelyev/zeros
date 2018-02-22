module.exports = function getZerosCount(number) {
  var zeros = 0; 
  var denominator = 5;

  while(denominator<number){
  	zeros+=Math.floor(number/denominator);
  	denominator*=5;
  };
  return zeros;
  // your implementation
}
