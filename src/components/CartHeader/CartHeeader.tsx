import productsArray, { getProductsObject, Product } from 'utils/ProductsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

console.log(productsArray)
const CartHeeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:{' '}
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <div>
                Total: ${' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)],
                    0
                )}
            </div>
        </div>
    )
}
export default CartHeeader
