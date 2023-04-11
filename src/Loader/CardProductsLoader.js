const CartProductsLoader = async () => {
    const loaderProducts = await fetch('products.json');
    const products = loaderProducts.json();
    return products
}

export default CartProductsLoader;