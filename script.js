//using the simple way without any complicating issues
// function buttonpressed(value){


function buttonpressed(value){
    console.log(value)
    
    switch (value)
    {
        case '=':
            results = eval(displayvalue)
            document.getElementById("screen").value = results;
            break;
        case 'ce':
            document.getElementById("screen").value = '';
            break;
        case 'pm':
            //code to swap between negative and positive values
            inputval = document.getElementById("screen").value;
            firstChar = inputval.charAt(0);
            // console.log(firstChar)
            if(firstChar != '-' || firstChar >= 0){
                displayvalue =  '-' + document.getElementById("screen").value;
            }
            else{
                displayvalue =  '+' + document.getElementById("screen").value;
            }
            
            document.getElementById("screen").value = displayvalue;
            break;
        default:
            displayvalue =  document.getElementById("screen").value + value;
            document.getElementById("screen").value = displayvalue;
    }

    //for screen 2
    switch (value)
    {
        case '=':
            //
            document.getElementById("screen2").value = displayvalue;
            break;
        case 'ce':
            document.getElementById("screen2").value = 0;
            break;
        case 'pm':
            //code to swap between negative and positive values for the +- key
            break;
        default:
            //determin wether to clear the screen or not, depending on the current display values and the new values.
            if(isNaN(value) || isNaN(document.getElementById("screen2").value)){ 
                document.getElementById("screen2").value = value;
                // console.log("Not a number")
            }
            else if (document.getElementById("screen2").value == 0){
                document.getElementById("screen2").value = value
                // console.log("It's a new screen")
            }
            else
            {
                screen2display = document.getElementById("screen2").value + value
                document.getElementById("screen2").value = screen2display
                // console.log("It's a number")
            }
    }

       
}

