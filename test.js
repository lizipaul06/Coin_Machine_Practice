var VendingMachine = function () {
    this.balance = 0;
    this.coins = {
      "nickel": 0.5,
      "dime": 0.1,
      "quarter": 0.25,
      "dollar": 1
    };
};



VendingMachine.prototype.insertMoney = function(coin){
  this.balance += this.coins[coin];

}

VendingMachine.prototype.getBalance = function () {
    return this.balance;
};

let assert = require('assert');

describe('Vending Machine', function () {

    describe('Balance of money inserted', function () {
        it('Is zero when initially powered up', function () {
            machine = new VendingMachine();
            assert.strictEqual(0, machine.getBalance())
        });
        it('Tracks the value of a single coin inserted', function(){
          machine.insertMoney("nickel")
            assert.strictEqual(0.5, machine.getBalance())

        });
    });

});
