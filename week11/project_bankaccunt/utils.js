import { readJson, writhJson } from "./jsonFiles.js"



export function checkCustomerId(customerId) {
    const customers = readJson();
    const customer = customers.find(customer => customer.id === customerId);
    return customer;
}


export function checkCustomerIdOrId(customersIdOrName) {
    const customers = readJson();
    const customer = customers.find(customer => customer.id === customersIdOrName.toLowerCase()
        || customer.name === customersIdOrName.toLowerCase());
    return customer;
}

export function maxCustomerId() {
    const customers = readJson();
    if (customers.length === 0) {
        return 0
    } else {
        const ids = customers.map(customer => Number(customer.id))
            .filter(id => !isNaN(id))
        return Math.max(...ids)
    }
}