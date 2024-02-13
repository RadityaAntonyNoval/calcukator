const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialChars =["%","+","=","-","*"]
let output ="";

const calculate=(btnValue)=>{
    display.focus();

    if (btnValue=== "=" && output!== ""){
        output = eval(output.replace("%", "/100").replace("MOD","%"));

    } else if (btnValue === "AC"){
        output = "";
    } else {
        if (output=== "" && specialChars.includes(btnValue)) return;
        output +=btnValue;
    }
    display.value=output
};
buttons.forEach((buttons)=>{
    buttons.addEventListener("click",(e)=> calculate(e.target.dataset.value));
});

