





















//attempt
$("document").ready(function(){
 // 	$("#calculator").on('click','a.heading', function(e){ 
 // 		e.preventDefault();
	// equals.on('click', function() {
 //    var firstInput = parseFloat(input.attr('name'));
 //    var secondInput = parseFloat(input.val());
 //    if (equals.hasClass('buttonplus')) {
 //        input.val(firstInput + secondInput);
 //    } else if (equals.hasClass('buttonminus')) {
 //        input.val(firstInput - secondInput);
 //    } else if (equals.hasClass('buttonmultiply')) {
 //        input.val(firstInput * secondInput);
 //    } else if (equals.hasClass('buttondivide')) {
 //        input.val(firstInput / secondInput);
 //    }

 // document.querySelector('#buttonplus').addEventListener('click', function(e){       ***
 // 	var num1 = Number(document.querySelector('#num1').value);
 // 	var num2 = Number(document.querySelector('#num2').value);
 // 	document.querySelector('#output').value = num1 + num2;
 // })

 $("#buttonplus").on('click',function(e){
 	var num1 = Number($('#num1').val())
 	var num2 = Number($("#num2").val())
 	$("#output").val(num1 + num2) 
 })
 $("#buttonminus").on('click',function(e){
 	var num1 = Number($('#num1').val())
 	var num2 = Number($("#num2").val())
 	$("#output").val(num1 - num2) 
 })
 $("#buttonmultiply").on('click',function(e){
 	var num1 = Number($('#num1').val())
 	var num2 = Number($("#num2").val())
 	$("#output").val(num1 * num2) 
 })
 $("#buttondivide").on('click',function(e){
 	var num1 = Number($('#num1').val())
 	var num2 = Number($("#num2").val())
 	$("#output").val(num1 / num2) 
 })
});















// $("document").ready(function(){
// 	$("#accordion").on('click','a.heading', function(e){ e.preventDefault();
// 	if (!$(this).find('+#input').hasId('firstInput')) {
// 		$("#input").calculate().removeId('secondInput');
// 		var id=$(this).attr('href');
// 		$(id)#output().addId('open');
// 	}

// });









// //other's notes=
// $(function() {
// var input = $('input');
// var equals = $('[name="equals"]');

// /*when a button with the 'num-button' class is clicked,
// adds the number of the button via its name to the inputs value*/
// $('.num-button').on('click', function() {
//     input.val(input.val() + $(this).attr('name'));
// });

// /*when a button with the 'operation' class is clicked,
// check if the subtract button was clicked while input field
// is empty, if so add - to input value, if not add inputs value
// to the inputs name attribute, then remove any classes attached
// to the equals button (if any) and then add the operation buttons
// name to the equals button as a class */
// $('.operation').on('click', function() {
//     var opName = $(this).attr('name');
//     if (opName == 'subtract' && input.val().length == 0) {
//         input.val('-');
//     } else {
//         input.attr('name', input.val());
//         input.val('');
//         equals.removeClass();
//         equals.addClass(opName);
//     }
// });

// when the equals button is clicked check to find out
// what the equal buttons class is, then get the values from
// the inputs attribute that we converted to a name (above),
// then get the current input value, then convert those string
// values to floated numbers and follow with the appropriate
// math operation for the two floated numbers
// equals.on('click', function() {
//     var firstInput;
//     var secondInput;
//     if (equals.hasClass('add')) {
//         firstInput = parseFloat(input.attr('name'));
//         secondInput = parseFloat(input.val());
//         input.val(firstInput + secondInput);
//     } else if (equals.hasClass('subtract')) {
//         firstInput = parseFloat(input.attr('name'));
//         secondInput = parseFloat(input.val());
//         input.val(firstInput - secondInput);
//     } else if (equals.hasClass('multiply')) {
//         firstInput = parseFloat(input.attr('name'));
//         secondInput = parseFloat(input.val());
//         input.val(firstInput * secondInput);
//     } else if (equals.hasClass('divide')) {
//         firstInput = parseFloat(input.attr('name'));
//         secondInput = parseFloat(input.val());
//         input.val(firstInput / secondInput);
//     }
// });

// //clears input field when clear button is clicked
// $('.clear').on('click', function () {
//     input.val('');
// });
// });




