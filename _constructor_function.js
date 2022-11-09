// constructor function starts with a capital letter
// javascript classes and nothing but syantic sugar over the constructor function

function BankAccount( customerName , balance ) {
   
      this.name = customerName;
      this.accountNumber = Date.now();
      this.balance = balance;


      this.deposit = function(amount){
           this.balance += amount ;
      }

      this.withdraw = function(amount){

        if( amount > this.balance  ){
            console.log("insufficient funds");
            return;
        }

        this.balance -= amount ;

      }


}
 

//CREATE OBJECT FROM THE CONSTRUCTOR FUNCTION

const a = new BankAccount("sidd" , 1000 );
// const b = new BankAccount("Pra" , 2000);

// a.deposit(900);
// a.withdraw(4000);

// console.log( a.balance );
// console.log(a.name ) ;