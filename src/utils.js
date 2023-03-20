export const prepareTilesData = (obj) => {
  const arr = []
  for(let part of obj) {
    arr.push({slides: [{src: part.img, alt: part.name}], title: part.name, text: part.description, url: part.url})
  }
  return arr
}