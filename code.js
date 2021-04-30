const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");


const colorChanger = (numberValue,number)=>{

    if(numberValue < 0) {
        return number.style.color = "red";
    }
    else if(numberValue > 0) {
        return number.style.color = "green";
    }
    else{
        return number.style.color = "white";
    }

}




decrease.addEventListener("click", function() {

    let number = document.querySelector(".number");
    let numberValue = parseInt(number.textContent);

    numberValue--
    let newNumberValue = numberValue;
    number.textContent = newNumberValue;

    colorChanger(numberValue,number);

});

increase.addEventListener("click", function() {

    let number = document.querySelector(".number");
    let numberValue = parseInt(number.textContent);

    numberValue++
    let newNumberValue = numberValue;
    number.textContent = newNumberValue;

    colorChanger(numberValue,number);

});


reset.addEventListener("click", function() {

    let number = document.querySelector(".number");
    let numberValue = parseInt(number.textContent);

    numberValue = 0;
    number.textContent = numberValue;

    number.style.color = "white";

});
