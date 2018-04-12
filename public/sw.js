importScripts('/assets/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-firebase-test",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/assets/app.20b66f6a8fa5b51c226d.js",
    "revision": "62af2b0077b9c2f7809c5a1e20d21ec1"
  },
  {
    "url": "/assets/common.bc35257661150fa55f19fa5726fe83ae.css",
    "revision": "bd5a1561d6fd9fc5c73ec834732fa5e8"
  },
  {
    "url": "/assets/common.c2ca9ead8c827b35e940.js",
    "revision": "5c979ced51cf4b9c23c1b5d1eed14031"
  },
  {
    "url": "/assets/layouts/default.5737c5177c4da6ecf537.js",
    "revision": "16437b16bd54727fb24790f562568d23"
  },
  {
    "url": "/assets/manifest.ddfccc03cf9fcddc6f06.js",
    "revision": "9951f554e6742fcaf28750dca4690231"
  },
  {
    "url": "/assets/pages/index.475cb167c9561380299d.js",
    "revision": "4c5983eb2c67592efc6eb791d7426b89"
  }
])


workboxSW.router.registerRoute(new RegExp('/assets/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

