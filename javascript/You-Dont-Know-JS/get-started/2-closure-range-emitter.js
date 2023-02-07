function range(start, withEndArgument) {
  if ((start && withEndArgument) || withEndArgument === 0) {
    let valuesArray = [];
    for (let i = start; i <= withEndArgument; i++) {
      valuesArray.push(i);
    }
    return console.log(valuesArray);
  }
  return function emitter(end) {
    let valuesArray = [];
    for (let i = start; i <= end; i++) {
      valuesArray.push(i);
    }
    return console.log(valuesArray);
  };
}

// function range(msg) {
//   return function who(name) {
//     console.log(`${msg}, ${name}!`);
//   };
// }

range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
