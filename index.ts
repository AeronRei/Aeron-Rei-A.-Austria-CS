//Activity 1
const numberOne: number = 1;
const Letter: string = "Hello";
const isActive: boolean = true;
const name: string = "Aeron Rei";
const numbers: number[] = [1, 2, 3, 4, 5];

function greet(person: string): string {
    return `Hello, ${person}`!;}

type IsString<T> = T extends string? "Yes" : "No";
type Test1 = IsString<string>;
type Test2 = IsString<number>;

console.log(numberOne);
console.log(Letter);
console.log(isActive);
console.log(name);
console.log(numbers);

console.log(greet(name));

//Activity:2

const itemName: string = "Burger";
const price: number = 150;
const quantity: number = 2;

const total = price * quantity;
console.log(`Total: ₱${total}`);

const menu: string[] = ["Burger", "Adobo", "Juice"];
const food: { name: string; price: number } = { name: "Adobo", price: 60 };

let discount: number | null = null;

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
} else if (total < 300) {
    console.log("Regular order");
} else {
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

function getLineTotal(price: number, qty: number): number {
    return price * qty;
}

function applyDiscount(total: number, isStudent: boolean): number {
    return isStudent ? total * 0.90 : total;
}

function getCartTotal(cart: { name: string; price: number; qty: number }[]): number {
    let total = 0;

    for (const item of cart) {
        total += getLineTotal(item.price, item.qty);
    }

    return total;
}

function printReceipt(
    customer: string,
    cart: { name: string; price: number; qty: number }[],
    isStudent: boolean
): void {
    const total = getCartTotal(cart);

    console.log(`Customer: ${customer}`);

    for (const item of cart) {
        console.log(`${item.name} x${item.qty} = ₱${getLineTotal(item.price, item.qty)}`);
    }

    console.log(`Discount: ₱${total - applyDiscount(total, isStudent)}`);
    console.log(`Final Total: ₱${applyDiscount(total, isStudent)}`);
}

printReceipt("Aeron", cart, true);