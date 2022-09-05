let numOne = ''; // first number
let numTwo = ''; // second number
let operator = ''; // operator


function clearAll()  // clear screen
{
    let numOne = ''; 
    let numTwo = ''; 
    let operator = '';
    document.getElementsByClassName("cacl__screen_white")[0].textContent = 0;
}


function display(variable) // displaying information on the screen
{
    const screen=document.getElementsByClassName("cacl__screen_white");
    screen[0].innerHTML = variable;
}

display('some text');




function clearAll()  // clear screen
{
    let numOne = ''; 
    let numTwo = ''; 
    let operator = '';
    document.getElementsByClassName("cacl__screen_white")[0].textContent = 0;
}

clearAll();



