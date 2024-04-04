function createAccount(pin, initialDeposit = 0) {
  if(pin === undefined || pin === "") {
    return "Missing or invalid pin number.";
  } else if(initialDeposit < 0) {
    return "Invalid initial deposit amount.";
  }

  let balance = initialDeposit;
  let pinNumber = pin;

  function validPin(inputPin) {
    return pinNumber === inputPin;
  }

  function checkBalance(inputPin) {
    if(validPin(inputPin)) {
      return `$${balance}`;
    } else {
      return "Invalid PIN.";
    }
  }

  function deposit(inputPin, depositAmount) {
    if(validPin(inputPin)) {
      balance += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
    } else {
      return "Invalid PIN.";
    }
  }

  function withdraw(inputPin, withdrawAmount) {
    if(validPin(inputPin)) {
      if(withdrawAmount > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      } else {
        balance -= withdrawAmount;
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
      }
    } else {
      return "Invalid PIN.";
    }
  }

  function changePin(oldPin, newPin) {
    if(validPin(oldPin)) {
      pinNumber = newPin;
      return "PIN successfully changed!";
    } else {
      return "Invalid PIN.";
    }
  }

  return {
    checkBalance,
    deposit,
    withdraw,
    changePin
  }
}

module.exports = { createAccount };
