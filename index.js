const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    if(billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates ?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

//function calculateChange() {
    for (let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.amountToBeReturned 
    }
}


function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    console.log("here");
    message.style.dislay = "block";
    message.innerText = msg;
}

