// a site with different types of posts

// imperative
function updateById(data, id) {
  let arr = [], length = data.length

  for(let i = 0;i < length; i++) {
    if(data[i].id === id) {
      arr.push(Object.assign({}, data[i], { lastUpdate: new Date() }))
    } else {
      arr.push(data[i])
    }
  }
  return arr
}
updateById(data, id)




// HOF
// frontend
const updateById = (fn, id, data) =>
  data.map(item => {
    if(item.id === id) {
      return fn(item)
    }
    return item
  })
updateById(item => ({
  ...item, lastUpdated: new Date()
}), id, data)

// backend
const updateById = (db, table, id, data) =>
  db.table(table).get(id).update(data)
updateById(dbConnection, tableName, id, data)
// this works, but is rigid, and requires repition, what if the update
// function should be different for each post?


















// curried
const updateById = fn => (id, data) =>
  data.map(item => {
    if(item.id === id) return fn(item)
    return item
  })

// db
const updateById = db => (table, id, data) =>
  db
    .table(table)
    .get(id)
    .update(data);

const updateBlogPostsById = updateById(post => ({
  ...post,
  author: 'new author name',
  lastUpdated: new Date()
}))

const updateNewsPostsById = updateById(post => ({
  ...post,
  content: 'lorem ipsum here'
  lastUpdated: new Date()
}))

updateBlogPostsById('123', data)
updateNewsPostsById('ABC', data)










// SOMETHING CRAZY











const updateNewsPost(postObj) {
  return {
    ...post,
    content: 'lorem ipsum here'
    lastUpdated: new Date()
  }
}
const containsAddress = string => {
  const hasAddress = new RegExp('/^\s*\S+(?:\s+\S+){2}/').test(string)
  return hasAddress && string
}
const reverse = string => string.split('').reverse().join('')
const toUpperCase = string => string.toUpperCase()
const toJSON = string => JSON.stringify(string)
const sendToServer = data => axios.post(data)

const pipe = ...functions => anyData =>
            functions.reduce((value, fn) => fn(value), anyData)

const updateBlogPostsById = updateById(
    pipe(
      updateNewsPost,
      containsAddress,
      reverse,
      toUpperCase,
      toJSON,
      sendToServer
    )
  )

updateBlogPostsById('123', data)

const updateById = fn => (id, data) =>
  data.map(item => {
    if(item.id === id) return fn(item)
    return item
  })
