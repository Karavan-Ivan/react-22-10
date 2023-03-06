import productsArray from 'utils/ProductsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

console.log(productsArray)
const CartHeeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsArray[parseInt(productId) - 1].title}:{' '}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeeader
