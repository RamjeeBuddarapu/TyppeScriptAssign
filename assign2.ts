class Bank
{
    public NameoftheDepositor:string;
    public AccountNumber:string;
    public TypeofAccount:string;
    public Balance:number;

    constructor(Name: string, AccountNumber:string,TypeofAccount: string,Balance: number) {
        this.NameoftheDepositor = Name;
        this.AccountNumber = AccountNumber;
        this.TypeofAccount = TypeofAccount;
        this.Balance = Balance;
      }
    
      deposit(amount: number): void 
      {
        this.Balance += amount;
        console.log(`Deposited ${amount},New Balance: ${this.Balance}`);
      }
    
      withdraw(amount: number): void 
      {
        if (amount > this.Balance) 
        {
          console.log('Insufficient Balance');
        } 
        else 
        {
          this.Balance -= amount;
          console.log(`Withdrawn ${amount},New Balance: ${this.Balance}`);
        }
      }
    
      displaydetails(): void 
      {
        console.log(`Depositor Name: ${this.NameoftheDepositor}`);
        console.log(`Account Number: ${this.AccountNumber}`);
        console.log(`Account Type: ${this.TypeofAccount}`);
        console.log(`Balance: ${this.Balance}`);
      }
}
const account1 = new Bank('charan', '6385726996', 'savings', 1000);
account1.displaydetails();
account1.deposit(500);
account1.withdraw(200);