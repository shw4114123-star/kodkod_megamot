import * as utils from "./utils.js"
import * as ui from "./ui.js"
import * as bank from "./bank.js"
import rl from "readline-sync"





function menu() {

    console.log(`
=========================================
            BANK ACCOUNT MENU
=========================================
1. Create new customer
2. Show all customers
3. Deposit money
4. Withdraw money
5. Search customer
6. Close account
7. Show statistics
8. Exit
=========================================`)
}

function main() {
    const getNextId = bank.createIdCustomer()
    let isRunning = true
    while (isRunning) {
        menu()
        let choice = rl.question("Enter your choice (1-8): ");
        switch (choice) {
            case "1":
                console.log(bank.createCustomer(getNextId))
                rl.question("Press a key to return to the menu: ")
                break
            case "2":
                console.log(bank.showCustomers())
                rl.question("Press a key to return to the menu: ")
                break
            case "3":
                console.log(bank.Deposit())
                rl.question("Press a key to return to the menu: ")
                break
            case "4":
                console.log(bank.Withdraw())
                rl.question("Press a key to return to the menu: ")
                break
            case "5":
                console.log(bank.searchCustomer())
                rl.question("Press a key to return to the menu: ")
                break
            case "6":
                console.log(bank.closeAccount())
                rl.question("Press a key to return to the menu: ")
                break
            case "7":
                console.log(bank.showStatistics())
                rl.question("Press a key to return to the menu: ")
                break
            case "8":
                isRunning = false
        }
    }
}

main()