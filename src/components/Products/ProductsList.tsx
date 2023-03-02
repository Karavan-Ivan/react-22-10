import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="h2" align="center">
                List of Products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="IPhone 14 Pro"
                        description="IPhone 14 Pro"
                        type="phone"
                        capacity="256"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="IPhone 13 Pro"
                        description="IPhone 13 Pro"
                        type="phone"
                        capacity="512"
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="IPhone 12 Pro"
                        description="IPhone 12 Pro"
                        type="phone"
                        capacity="128"
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
