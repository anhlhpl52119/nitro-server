export default defineEventHandler(async () => {
  const data = await useStorage('myFileSystem').getItem('data.json')
  console.log(data)
  return data
})