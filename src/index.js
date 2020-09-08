/*
 * @Author: your name
 * @Date: 2020-09-07 14:50:23
 * @LastEditTime: 2020-09-07 17:33:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /edm.trunk/credit/2020credit/demo/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register(process.env.NODE_ENV === 'development' ? './sw.js' : './sw.out.js')
//     .then(registration => {
//       console.log(`Service worker registered with scope: ${registration.scope}`);
//     })
// }
// 1. 需要在网页加载完成的时候，注册service worker
window.addEventListener('load', () => {
  // 2. 能力检测
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then(registration => {
        console.log(registration)
      })
      .catch(err => {
        console.log(err)
      })
  }
})