
// Minimum

var min = (first, second) => {
    return (first <= second) ? first : second; //( if()else)
  };

  console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Recursion

var isEven = function(num) {
    num = Math.abs(num);
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Bean counting

var countBs = function(str) {
    return str.match(/B/g).length;
};

var countChar = function(str, character) {
    var matchExp = new RegExp(character, 'g');
    return str.match(matchExp).length;
};


//tests
console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));

