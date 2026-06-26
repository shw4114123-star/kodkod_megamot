import rl from "readline-sync"


export const inputName = () => {
    const name = rl.question("Enter your name: ");
    return name.trim();
}


export const inputaccountType = () => {
    const accountType = rl.question("Enter the account type: ");
    return accountType;
}


export const inputstartingBalance = () => {
    const startingBalance = rl.questionInt("Enter the starting balance: ");
    return startingBalance;
}


export const inputcustomersId = () => {
    const customersId = rl.question("enter the customer id: ");
    return customersId;
}

export const inputcustomersIdOrName = () => {
    const customersIdOrName = rl.question("enter the customer id or the customer name: ");
    return customersIdOrName;
}


export const inputamount = () => {
    const amount = rl.question("enter the anount thet you wont update: ");
    return amount;
}
