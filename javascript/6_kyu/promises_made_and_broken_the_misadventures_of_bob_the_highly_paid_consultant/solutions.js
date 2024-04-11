async function submitOrder(user) {
    var shoppingCart, zipCode, shippingRate, orderSuccessful;

    // Get the current user's shopping cart
    await OrderAPI.getShoppingCartAsync(user).then(function(cart) {
        shoppingCart = cart;
    });

    // Also look up the ZIP code from their profile
    await CustomerAPI.getProfileAsync(user).then(function(profile) {
        zipCode = profile.zipCode;
    });

    // Calculate the shipping fees
    shippingRate = calculateShipping(shoppingCart, zipCode);

    // Submit the order
    await OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
        orderSuccessful = success;
    });

    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}