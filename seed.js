const faker = require('@faker-js/faker');
const fs = require('fs')

const { price , productName, productDescription } = faker.commerce

const productType = ['earrings', 'rings', 'bracelets', 'pendants', 'brooch']

const productMaterial = ['gold', 'silver', 'pink gold']

let products = [...Array(100).keys()].map((_, i) => ({
    id: i + 1,
    title: productName(),
    price: price(),
    description: productDescription(),
    imageUrl: 'https://picsum.photos/200/200',
    productType : productType[i % 5],
    productMaterial : productMaterial[i % 3],
}))

let order = {}

const json = {products, totalCount: [products.length], order}

fs.writeFileSync('./db.json', JSON.stringify(json), 'utf-8', () => {
    console.log('success')
})
