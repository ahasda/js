// Step 1: Get Account
function getAccount() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("🏦 Account fetched");
            resolve({ name: "Aniket", balance: 10000 });
        }, 1000);
    });
}


// Step 2: Check Balance
function checkBalance(account, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!account) {
                reject("❌ Account not found");
            } else if (account.balance < amount) {
                reject("❌ Insufficient balance");
            } else {
                console.log("💰 Balance is sufficient");
                resolve(account);
            }
        }, 1000);
    });
}


// Step 3: Transfer Money
function transferMoney(account, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!account) {
                reject("❌ Transfer failed");
            } else {
                account.balance -= amount;
                console.log(`💸 Transferred ₹${amount}`);
                resolve(account);
            }
        }, 1000);
    });
}


// Step 4: Update Transaction
function updateTransaction(account) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!account) {
                reject("❌ Transaction update failed");
            } else {
                console.log("🧾 Transaction updated");
                resolve({
                    status: "Success",
                    remainingBalance: account.balance
                });
            }
        }, 1000);
    });
}


// 👉 Students ko flow complete karna hai
let transferAmount = 9000;

getAccount()
    .then(account => {
        return checkBalance(account, transferAmount);
    })
    .then(account => {
        return transferMoney(account, transferAmount);
    })
    .then(account => {
        return updateTransaction(account);
    })
    .then(result => {
        console.log("✅ Final Result:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });