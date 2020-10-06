import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.github.com'
})

http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json'

export { http }