
type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray:Product[] = [
    {
        id: 1,
        title:"IPhone 14 Pro",
        description:"IPhone 14 Pro",
        type:"phone",
        capacity:"512",
        price:1500,
    },
    {
        id: 2,
        title:"IPhone 13 Pro",
        description:"IPhone 13 Pro",
        type:"phone",
        capacity:"128",
        price:800,
    },
    {
        id: 3,
        title:"IPhone X Pro",
        description:"IPhone X Pro",
        type:"phone",
        capacity:"256",
        price:500,
    },
    {
        id: 4,
        title:"IPhone 12 Pro",
        description:"IPhone 12 Pro",
        type:"phone",
        capacity:"256",
        price:700,
    },
    {
        id: 5,
        title:"IPhone 11 Pro",
        description:"IPhone 11 Pro",
        type:"phone",
        capacity:"128",
        price:400,
    },
    {
        id: 6,
        title:"IPhone 8 Pro",
        description:"IPhone 8 Pro",
        type:"phone",
        capacity:"256",
        price:300,
    }
]

export default productsArray