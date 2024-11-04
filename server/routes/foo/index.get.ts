export default defineEventHandler(async () => {
  const data = await useStorage('myFileSystem').getItem('foo.json')
  return data
})