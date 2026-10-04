"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Activity 1
const numberOne = 1;
const Letter = "Hello";
const isActive = true;
const name = "Aeron Rei";
const numbers = [1, 2, 3, 4, 5];
function greet(person) {
    return `Hello, ${person}`;
}
console.log(numberOne);
console.log(Letter);
console.log(isActive);
console.log(name);
console.log(numbers);
console.log(greet(name));
//Activity:2
const itemName = "Burger";
const price = 150;
const quantity = 2;
const total = price * quantity;
console.log(`Total: ₱${total}`);
const menu = ["Burger", "Adobo", "Juice"];
const food = { name: "Adobo", price: 60 };
let discount = null;
const isStudent = true;
if (isStudent) {
    discount = total * 0.10;
}
const finalDiscount = isStudent ? total * 0.10 : 0;
const finalTotal = total - finalDiscount;
console.log(`Discount: ₱${finalDiscount}`);
console.log(`Final Total: ₱${finalTotal}`);
if (total < 100) {
    console.log("Small order");
}
else if (total < 300) {
    console.log("Regular order");
}
else {
    console.log("Big order");
}
const cart = [
    { name: "Adobo", price: 60, qty: 2 },
    { name: "Juice", price: 25, qty: 1 }
];
for (const item of cart) {
    console.log(`${item.name} - ₱${item.price}`);
}
let subtotal = 0;
for (const item of cart) {
    subtotal += item.price * item.qty;
}
console.log(`Subtotal: ₱${subtotal}`);
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}
function getLineTotal(price, qty) {
    return price * qty;
}
function applyDiscount(total, isStudent) {
    return isStudent ? total * 0.90 : total;
}
function getCartTotal(cart) {
    let total = 0;
    for (const item of cart) {
        total += getLineTotal(item.price, item.qty);
    }
    return total;
}
function printReceipt(customer, cart, isStudent) {
    const total = getCartTotal(cart);
    console.log(`Customer: ${customer}`);
    for (const item of cart) {
        console.log(`${item.name} x${item.qty} = ₱${getLineTotal(item.price, item.qty)}`);
    }
    console.log(`Discount: ₱${total - applyDiscount(total, isStudent)}`);
    console.log(`Final Total: ₱${applyDiscount(total, isStudent)}`);
}
printReceipt("Aeron", cart, true);
//# sourceMappingURL=index.js.map