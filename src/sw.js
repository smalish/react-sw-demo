/*
 * @Author: your name
 * @Date: 2020-09-07 14:59:57
 * @LastEditTime: 2020-09-07 17:26:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /edm.trunk/credit/2020credit/demo/src/sw.js
 */
// sw.js
/* eslint no-restricted-globals: 1 */
// import { registerRoute } from 'workbox-routing';
// import { CacheFirst } from 'workbox-strategies';
// import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// import { ExpirationPlugin } from 'workbox-expiration';
// import { precacheAndRoute } from 'workbox-precaching';

// precacheAndRoute(self.__WB_MANIFEST || [], {
//   cleanURLs: false,
// });


// self.addEventListener('install', () => {
//   self.skipWaiting();
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(self.clients.claim());
// });

// registerRoute(
//   ({ url }) => {
//     // 筛选出需要缓存的资源
//     return /webapp.*saturnv.*\.(?:mp3|mp4)$/.test(url.href);
//   },
//   new CacheFirst({
//     cacheName: 'meida-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200]
//       }),
//       new ExpirationPlugin({
//         maxEntries: 200,
//         maxAgeSeconds: 30 * 24 * 60 * 60,
//         purgeOnQuotaError: true
//       })
//     ]
//   })
// )


self.addEventListener('install', event => {
  // 111
  console.log('install', event)
  // 会让service worker跳过等待，直接进入到activate状态
  // 等待skipWaiting结束，才进入到activate
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', event => {
  console.log('activate', event)

  // 表示service worker激活后，立即获取控制权
  event.waitUntil(self.clients.claim())
})

// 注释：fetch事件会在请求发送的时候触发
self.addEventListener('fetch', event => {
  console.log('fetch', event)
})
