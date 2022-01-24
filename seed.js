const faker = require('@faker-js/faker');
const fs = require('fs')

const { price , productName, productDescription } = faker.commerce

const products = [...Array(30).keys()].map((_, i) => ({
    id: i + 1,
    title: productName(),
    price: price(),
    description: productDescription(),
    imageUrl: 'https://picsum.photos/200/200'
}))

const json = {products}

fs.writeFileSync('./db.json', JSON.stringify(json), 'utf-8', () => {
    console.log('success')
})
