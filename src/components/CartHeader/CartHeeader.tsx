type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartHeeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId}: {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeeader
