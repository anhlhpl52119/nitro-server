export default defineEventHandler(async () => {
  const data = await useStorage('myFileSystem').setItem('data.json', {
    response: "this is modified data"
  })
  return data
})