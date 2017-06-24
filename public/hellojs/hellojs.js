//CREATES A SCOPE FOR YOUR VARIABLE (CLOSER)
function scope_func() {
var my_own_var = "hellojs1";

  function hello() {
  console.log(my_own_var);
 };
}


// LOCALLY SCOPED FUNCTIONS
// console.log(a_var === undefined);
// var a_var = 123
// console.log(func_var === undefined);
//
// function a_function() {
//   console.log(func_var === undefined);
//   var var_func = "func";
// }
//
// a_function();




// var input;
// if (input) {
//   console.log(input);
// } else {
//   console.log("It's not defined.");
// }
//
// IF STATEMENT
// var value = 0;
// if (value === 0) {
//   console.log("zero");
// } else if (value === 1) {
//   console.log("one");
// } else {
//   console.log("or something else");
// }
//
// WHILE LOOP
// var a = 0
// while (true) {
//   console.log(a);
//   if (a >= 10) {
//     break;
//   } else {
//     a++;
//   }
// }
//
// FOR LOOP
// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }
//
// FOR EACH LOOP
// var arr = ["a", "b", "c", "d"];
//
// arr.forEach(function(item){
//   console.log(item);
// });
//
// // CREATING A FUNCTION
// function my_func_stmt(arg) {
//   console.log("inside my function statement");
//   console.log(arg);
// }
//
// var my_func_exp = function(arg) {
//   console.log("inside my function");
//   console.log(arg);
// }
// // CALLING A FUNCTION
// my_func_stmt("Hola");
// my_func_exp("Hola");
//
// JS ALWAYS REQUIRES EXPLICIT RETURN
// var one = function() {
//   return 1;
// }
// console.log(one());
//
// function addArgs() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
//   console.log('printing args:', arguments);
// }
//
// console.log(addArgs(3, 0.13, 0.01));
