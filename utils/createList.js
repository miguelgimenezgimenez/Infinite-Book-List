
export const createList = (store, cb) => {
  let i
  let list = []
  for (i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    const letter = String.fromCharCode(i)
    if (cb) {
      cb(letter)
    }
    if (store) {
      if (store[letter]) {
        list = list.concat(store[letter])
      } else {
        return list
      }
    } else {
      list.push(letter)
    }
  }
  return list
}
