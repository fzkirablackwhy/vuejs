import axios from 'axios'

const mashapKey = '7HmvH4YXqHmshzivn3wC2cg1S2gHp1BjS9sjsnPp0xdrXJmC4v'
const mashapAuth = '7HmvH4YXqHmshzivn3wC2cg1S2gHp1BjS9sjsnPp0xdrXJmC4v'
const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/`

export const HTTP = axios.create({
  baseURL: url,
  headers: {
    'X-Mashape-Authorization': mashapAuth,
    'X-Mashape-Key': mashapKey
  }
})
