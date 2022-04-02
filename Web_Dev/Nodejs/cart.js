module.exports = (function() { /*creating cart class*/
    let cart = [];

    function add(item) {
        cart.push(item)
    };

    function deleteitem(item) {
        cart.find((e) => e.id == id)
        let index = cart.indexOf(item)
        cart.splice(index, 1)
    };

    function showall() {
        return cart;
    }

    return {
        addItemToCart: add,
        deleteitem,
        showall,
    }
})() /*<-- this is a self created object*/ ;