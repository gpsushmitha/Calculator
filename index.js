var input = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');
var string = ""; 
 var arr = Array.from(buttons);

arr.forEach(function(button){
    button.addEventListener('click', (MouseEvent)=>{
        if(MouseEvent.target.innerHTML === '='){
            string = eval(string);
            input.value = string;
        }
        else if(MouseEvent.target.innerHTML === 'AC'){
            string = "";
            input.value = string;
        }
        else if(MouseEvent.target.innerHTML === '←'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += MouseEvent.target.innerHTML;
        input.value = string;
        }
    });
});  
