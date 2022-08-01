
// displaying information on the screen
function display(variable)
{
    const screen=document.getElementsByClassName("cacl__screen_white");
    screen[0].innerHTML = variable;
}

display('some text');




// const dom=document.querySelector('.cacl__screen_white');
// console.log(dom);

// const screen=document.getElementsByClassName("cacl__screen_white");
// const screenText = screen[0].innerText;
// console.log(screenText);