
var all_button = document.querySelectorAll('button');     

var result = document.querySelector('.display-cal');

all_button.forEach(function(button) {
  button.addEventListener('click', adeel);
});



function adeel(){

var clickedButtonValue = event.target.value;


if(clickedButtonValue!="=" && clickedButtonValue!="C"){

result.value += clickedButtonValue;

}

if (clickedButtonValue=='C') {
	
result.value = ''
}



if (clickedButtonValue=='=') {
	
result.value = eval(result.value)
}



}



