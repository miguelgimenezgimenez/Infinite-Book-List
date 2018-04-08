
export const createList = (store) => {
  let i
  let list = []
  for (i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    const letter = String.fromCharCode(i)
    if (store[letter]) list = list.concat(store[letter])
    else return list
  }
  return list
}
