

var reasonList = [];
var expenseList = [];

function generateExpenses() {
    var expense_reason = document.getElementById("reason").value;
    var expense_amount = document.getElementById("amount").value;

    if (expense_reason.trim().length <= 0 || expense_amount.trim().length <= 0 || expense_amount <= 0) {
        return
    }

    reasonList.push(expense_reason);
    expenseList.push(expense_amount);

    for (var i = 0; i < reasonList.length; i++) {
        reason = reasonList[i];
        expense = expenseList[i] + "\n";
        document.getElementById("expenses-list").innerHTML += reason + " $" + expense;

    }

    console.log(expenseList);

    document.getElementById("reason").value = "";
    document.getElementById("amount").value = "";

    return false;

}