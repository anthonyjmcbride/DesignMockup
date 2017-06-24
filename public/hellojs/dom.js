window.addEventListener('load', function() {
var textField = document.getElementById('our-text-input');
textField.value = "A default value";
});


// window.addEventListener('load',function() {
//   var textField = document.getElementById('our-text-input');
//   textField.addEventListener('change', function(event){
//     console.log("Something changed.");
//     console.log(event.target.value);
//   });
// });


// OBTRUSIVE DO NOT USE
// function onChangeHandler(input) {
//   console.log("Something changed.");
//   console.log(input.value);
// }

// window.addEventListener('load', function() {
// var textField = document.getElementById('our-text-input');
// textField.addEventListener('change', function(){
//   console.log("Something changed.");
//   console.dir(arguments);
//   });
// });

// console.log("hello");
// var world = function() {
//   console.log("world");
// };
// setTimeout(world, 3000);
