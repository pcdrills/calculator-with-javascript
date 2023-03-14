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
        default:
            displayvalue =  document.getElementById("screen").value + value;
        document.getElementById("screen").value = displayvalue;
    }
       
}

