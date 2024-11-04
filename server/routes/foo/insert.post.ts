export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const current: any = await useStorage('myFileSystem').getItem('foo.json') || {}
  await useStorage('myFileSystem').setItem('foo.json', {
    ...current, ...body
  })
  // return data
  const data = await useStorage('myFileSystem').getItem('foo.json')
  return data
})