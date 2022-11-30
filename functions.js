//   Function declaration   //

function func() {
    return 'hello world';
 };
 const result = func();
 console.log(result);


 //   Function expression   //
 const myFunction = function() {
    return 'hello world';
 };
 const res = myFunction();
 console.log(res);


 // Correctly return value from function (1)  //

 
const myfunc = function() {
    let text = 'hello';
    text = text + ' world';
    return text;
 };
 const resu = myfunc();
 console.log(resu);



 ///  Functions - parameters and arguments (1)  ///

 const multiply = function (num) {
    return num * num;
 };
  
 const arg = 5;
  
 const results = multiply(arg);
 console.log(results === 25);

