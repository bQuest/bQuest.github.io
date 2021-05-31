"use strict"

var accountInfoList = [];
var Account = (function(){
    let accountName = "";
    let deposit = 0;
    var getName = () => {accountName;};
    var  getDeposit = () => {deposit;};

    return {
        addAccount: function(accountName, deposit) {
                        this.accountName = accountName;
                        this.deposit = deposit;
                        accountInfoList.push(this);
                     },
        getAccountDetails: function {
            return "Name: " + getName() + " Account Deposit: " + getDeposit();
        }       
    }

})();

function Acc(name, dep){
    this.Name = name; this.dp = dep;
}

var no = Account.addAccount('Jazz', 10000);
accountInfoList.forEach(a => {
    console.log(a);
});