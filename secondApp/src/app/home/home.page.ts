import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  text = "Ready to create App?";

  expense_reason: string;
  expense_amount: number;
  status = false;
  reasonList = [];
  amountList: number[] = [];
  totalExpense: number;
  sumNumber: number;
  constructor() { }

  generateExpenses() {

    if (this.expense_reason == "" || this.expense_amount <= 0) {
      return
    }
    this.reasonList.push(this.expense_reason + " " + this.expense_amount);
    this.amountList.push(this.expense_amount);

    this.sumNumber = this.amountList.reduce((acc, totalExpense) => acc + Number(totalExpense), 0)
    this.expense_reason = "";
    this.expense_amount = 0;
  }
}
