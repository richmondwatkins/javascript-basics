// //
// // // var firstName = prompt('What is your first name?');
// // // var lastName = prompt('What is your last name?');
// // // var fullName = firstName + ' ' + lastName;
// // //
// // // var age = prompt("What is your age?")
// // //
// // // age = parseInt(age);
// // //
// // // if(age > 20){
// // //   console.log("you can drink alcohol...legally");
// // // }
// // // else {
// // //   console.log('you are too young to drink!');
// // // }
// // //
// // // if(age >= 0 && age < 6){ //between 0 and 5
// // //   console.log('Movies: G');
// // // } else if(age >= 6 && age < 13){ //between 6 and 12
// // //   console.log('Movies: PG');
// // // } else if (age >= 13 && age < 18);{ //between 13 and 17
// // //   console.log('Movies: PG-13')
// // // } else {  //18 and older
// // //     conosole.log('Movie: R');
// // // }
// //
// //
// //
// // var color = prompt('What is your fav color');
// //
// // switch(color){
// // case 'blue':
// //     console.log('blue is awesome');
// //     break;
// //   case 'red':
// //     console.log('red is awesome');
// //     break;
// //   case 'green':
// //     console.log('green is awesome');
// //     break;
// //   case 'yellow':
// //     console.log('yellow is awesome');
// //     break;
// //   default:
// //     console.log('i dont like that color');
// // }
// //
// // var number = prompt('Enter a number')
// // number = number * 1;
// //
// // if(number > 0 && number <10){
// //   while(number < 50){
// //     console.log('Number : ' + number);
// //     number +=2;
// //   }
// // }
// //
// // for(var i = 0; i < 50; i ++) {
// //   console.log('I : ' + i);
// // }
//
//
// var colors = [];
//
// var response = prompt('Enter a color or (q)uit');
// response = response.toLowerCase();
// debugger;
// while(response != 'q'){
//   colors.push(response);
//   console.log(colors);
//   response = prompt('Enter a color or (q)uit');
//   response = response.toLowerCase();
// }
//
//

// var evens = [], odds = [];
//
// for(var i = 0; i < 100; i++) {
//   var remainder = i % 2;
//
//   if(remainder === 0) { //this is even
//     var square = i * i;
//     evens.push(square);
//   } else {  //odd
//     var cube = Math.pow(i, 3);
//     odds.push(cube);
//   }
// }
//
// console.log(evens);
// console.log(odds);


function square(x){
  return x * x;
}

function cube(x) {
  return Math.pow(x, 3);
}

function isOdd(x){
    if(x % 2 !== 0){
    return true;
  }
  return false;
  }


function area(l,w) {
  return l * w;
}


function volume (l, w, h) {
  return l * w * h;
}

var z = square(3) + cube(9) - area(3,4) * volume(5,6,7);
var y = cube(square(3) - cube(2));
var x = area(square(cube(2)), cube(square(3)));

debugger;
