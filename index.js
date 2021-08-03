const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    if(billAmount.value > 0) {
        message.style.display = "none"; 
        else  {
            message.style.dosplay = "block";
            message.innerText = "The bill amount should be greater than 0";
        }

    }
}
);