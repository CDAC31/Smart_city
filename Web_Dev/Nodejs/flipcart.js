const flipkart = require("./cart") /*this gives/refers to an object from the cart class*/

flipkart.addItemToCart({ "Id": 101, "Product": "Samsung Galaxy Note 21", "price": 83500 });
flipkart.addItemToCart({ "Id": 102, "Product": "Oneplus 9T", "price": 58000 });
flipkart.addItemToCart({ "Id": 101, "Product": "Google pixle 6pro", "price": 75000 });

const items = flipkart.showall();
for (const item of items) {
    console.log(item);
}