// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2024-11-04",
  storage: {
    myFileSystem: {
      driver: 'fs',
      base: 'assets/',
    },
  },
});