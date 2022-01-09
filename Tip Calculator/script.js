const billAmt = document.getElementById("bill-amt");
const tipPercent = document.getElementById("tip-percent");
const tipAmt = document.getElementById("tip-amt");
const totalBill = document.getElementById("total-bill");
let amount;

document.getElementById("submit-btn").addEventListener("click", () => {
    try{
        amount = eval(billAmt.value * (tipPercent.value / 100));
        tipAmt.value = amount.toFixed(2); //show tip amount in output
        total = parseFloat(billAmt.value) + parseFloat(tipAmt.value);
        totalBill.value = total.toFixed(2); //show total bill amount
    }catch(err){
        tipAmt.value = "Format error.";
        totalBill.value = "Format error.";
    }
});
