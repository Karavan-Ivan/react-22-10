import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {}

const ProductsListItem = (props: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-item">IPhone 14 Pro</div>
                <div className="product-description">This IPhone 14 Pro</div>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 256 Gb</div>
                <div className="product-price">500$</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to card</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem