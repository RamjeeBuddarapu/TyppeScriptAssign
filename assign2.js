var Bank = /** @class */ (function () {
    function Bank(Name, AccountNumber, TypeofAccount, Balance) {
        this.NameoftheDepositor = Name;
        this.AccountNumber = AccountNumber;
        this.TypeofAccount = TypeofAccount;
        this.Balance = Balance;
    }
    Bank.prototype.deposit = function (amount) {
        this.Balance += amount;
        console.log("Deposited ".concat(amount, ",New Balance: ").concat(this.Balance));
    };
    Bank.prototype.withdraw = function (amount) {
        if (amount > this.Balance) {
            console.log('Insufficient Balance');
        }
        else {
            this.Balance -= amount;
            console.log("Withdrawn ".concat(amount, ",New Balance: ").concat(this.Balance));
        }
    };
    Bank.prototype.displaydetails = function () {
        console.log("Depositor Name: ".concat(this.NameoftheDepositor));
        console.log("Account Number: ".concat(this.AccountNumber));
        console.log("Account Type: ".concat(this.TypeofAccount));
        console.log("Balance: ".concat(this.Balance));
    };
    return Bank;
}());
var account1 = new Bank('charan', '6385726996', 'savings', 1000);
account1.displaydetails();
account1.deposit(500);
account1.withdraw(200);
