import {
    inputName, inputaccountType, inputstartingBalance,
    inputcustomersId, inputcustomersIdOrName, inputamount
} from "./ui.js"
import { readJson, writhJson } from "./jsonFiles.js"
import { checkCustomerId, checkCustomerIdOrId, maxCustomerId } from "./utils.js"


export function createIdCustomer() {
    let customerId = maxCustomerId();
    function id() {
        customerId++;
        return customerId
    }
    return id
}


export function createCustomer(getNextIdFunction) {
    const id = getNextIdFunction()
    const customers = readJson()
    const name = inputName()
    const accountType = inputaccountType()
    const startingBalance = inputstartingBalance()
    const allowedTypes = ["Regular", "Premium", "Student"];
    if (name) {
        if (allowedTypes.includes(accountType)) {
            customers.push({ id: String(id), fullName: name, accountType: accountType, Balance: startingBalance, isActive: true })
            writhJson(customers)
            return "Customer created successfully."
        } else {
            return "not a correct account type"
        }
    } else {
        return "name can't by emty"
    }
}

export function showCustomers() {
    return readJson()
}


export function Deposit() {
    const customersId = inputcustomersId()
    const amount = inputamount()
    const customer = checkCustomerId(customersId)
    if (customer) {
        if (customer.isActive) {
            customer.Balance += amount
            return "Deposit completed successfully";
        } else {
            return "the account is inactive.";
        }
    } else {
        return "not found customer with this id"
    }
}


export function Withdraw(customersId) {
    customersId = inputcustomersId()
    const amount = inputamount()
    const customer = checkCustomerId(customersId)
    if (customer) {
        if (customer.isActive) {
            if (customer.Balance > amount) {
                customer.Balance -= amount
                return "Withdraw completed successfully."
            } else {
                return "Withdraw failed: insufficient balance."
            }
        } else {
            return "the account is inactive."
        }
    } else {
        return "not found customer with this id."
    }
}


export function searchCustomer(customersIdOrName) {
    customersIdOrName = inputcustomersIdOrName()
    const customer = checkCustomerIdOrId(customersIdOrName)
    if (customer) {
        return customer
    } else {
        return "can't found customer with this id or name."
    }
}


export function closeAccount(customersId) {
    customersId = inputcustomersId()
    const customer = checkCustomerId(customersId)
    if (customer) {
        customer.isActive = false
        return "Account closed successfully"
    } else {
        return "can't found customer with this id."
    }
}


export function showStatistics() {
    const totalCustomers = customers.length
    const activeAccounts = customers.filter(customer => customer.isActive === true)
    const totalMoney = customers.reduce((sum, current) => sum + current.amount, 0)
    const averageBalance = totalMoney / totalCustomers
    const highestBalance = Math.max(...customers.map(customer => customer.Balance))
    return {
        "Total Customers": totalCustomers, "Active Accounts": activeAccounts,
        "Total Money": totalMoney, "Average Balance": averageBalance, "Highest Balance": highestBalance
    }
}































