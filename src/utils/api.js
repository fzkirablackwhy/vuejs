import axios from 'axios'

const mashapKey = '7HmvH4YXqHmshzivn3wC2cg1S2gHp1BjS9sjsnPp0xdrXJmC4v'
export const mashapAuth = 'b5725bcff02fc9371f33951f31c10c19'
const url = 'https://community-food2fork.p.mashape.com'

export const instance = axios.create({
  baseURL: url
})

instance.defaults.headers.common['X-Mashape-Authorization'] = mashapAuth
instance.defaults.headers.common['X-Mashape-Key'] = mashapKey

export const apiRequests = {
  searchByRecipeId(id) {
    instance.get(`/get?key=${mashapAuth}&rId=${id}`)
  }
}
