import express from "express"
import { promises } from 'fs';

const products = [
  { id: 1, name: 'Laptop', price: 3000, category: 'tech' },
  { id: 2, name: 'Mouse', price: 150, category: 'tech' },
  { id: 3, name: 'Desk', price: 800, category: 'furniture' },
  { id: 4, name: 'Monitor', price: 1200, category: 'tech' },
];

const app = express()

// 1
app.get("/products/:id", (req, res) => {
  const { id } = req.params
  if (!id || isNaN(id)) {
    res.status(400)
    return res.end("wrong url")
  }
  const findProduct = products.find((product) => product.id === Number(id))
  if (!findProduct) {
    res.status(404)
    return res.end("error: not found the product")
  }
  return res.json(findProduct)
})


// 2.
app.get("/products", (req, res) => {
  try {
    const { minPrice, maxPrice, category, sort } = req.query
    if (category) {
      const productsByCategory = products.filter(product => product.category === category)
      return res.json(productsByCategory)
    }
    if (sort){
      const productsBySortPrice = products.sort((a, b) => a.price - b.price)
      res.json(productsBySortPrice)
    }
    if (minPrice && maxPrice) {
      const productsByPrice = products.filter(product => product.price > +minPrice && product.price < +maxPrice);
      return res.json(productsByPrice)
    } else {
      return res.json(products)
    }
  } catch (e) {
    res.status(500)
    return res.end(`error: ${e}`)
  }
});



app.listen(3000, () => {
  console.log("server runing...")
})