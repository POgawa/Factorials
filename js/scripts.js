function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    var results = factorial(num - 1) * num; 
    return results;
  };
};

$(document).ready(function(){
 //get input
 $('form#input').submit(function(event){
   
   var num = $('input#factorial').val();  
   var factorialInput = factorial(num); 
 //return script output
   $('.results').text(factorialInput);
   event.preventDefault();
 });
});
