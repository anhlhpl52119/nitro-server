export default defineEventHandler(async (event) => {
  const deleteKey = getRouterParam(event, 'key');
  const current: any = await useStorage('myFileSystem').getItem('foo.json')
  delete current[deleteKey];
  await useStorage('myFileSystem').setItem('foo.json', current)
  // return data
  const data = await useStorage('myFileSystem').getItem('foo.json')
  return data
})