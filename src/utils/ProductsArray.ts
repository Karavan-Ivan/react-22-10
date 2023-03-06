
export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
        id: 1,
        title:"IPhone 14 Pro",
        description:"IPhone 14 Pro",
        type:"phone",
        capacity:"512",
        price:1500,
        image:"/images/iphone-14-pro-purple.webp",
    },
    {
        id: 2,
        title:"IPhone 13 Pro",
        description:"IPhone 13 Pro",
        type:"phone",
        capacity:"128",
        price:800,
        image:"/images/iphone-13-pro-graphite.webp",
    },
    {
        id: 3,
        title:"IPhone 13 Pro Max",
        description:"IPhone 13 Pro Max",
        type:"phone",
        capacity:"256",
        price:900,
        image:"/images/iphone-13-pro-max-green.webp",
    },
    {
        id: 4,
        title:"IPhone 12",
        description:"IPhone 12",
        type:"phone",
        capacity:"256",
        price:700,
        image:"/images/iphone-12-white.webp",
    },
    {
        id: 5,
        title:"IPhone 11",
        description:"IPhone 11",
        type:"phone",
        capacity:"128",
        price:400,
        image:"/images/iphone-11-white.webp",
    },
    {
        id: 6,
        title:"IPhone 14 Pro Max",
        description:"IPhone 8 Pro Max",
        type:"phone",
        capacity:"256",
        price:1800,
        image:"/images/iphone-14-pro-max-gold.webp",
    }
]

export const getProductsObject = (array:Product[]) => array.reduce((object, product) => 
    ({
        ...object,
        [product.id]:product,
    }), 
    {}
)

export default productsArray