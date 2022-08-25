/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d82922edf1fd3a36ab681115d165e110"
  },
  {
    "url": "assets/css/0.styles.a6776394.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.2a96aab4.js",
    "revision": "f41b6af4b53b186fb36a5ae577496e15"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.0de4d9c4.js",
    "revision": "c974b4ae391137847e3e9c4f92eeec00"
  },
  {
    "url": "assets/js/15.1ad9e7af.js",
    "revision": "db8f0050de63e8e9fb79afb1f14d8086"
  },
  {
    "url": "assets/js/16.86c34caa.js",
    "revision": "4f001832c1dcab7779e16712ad73048c"
  },
  {
    "url": "assets/js/17.ea2fffa9.js",
    "revision": "23a16002a25969a14bdd8f81fbaa28c4"
  },
  {
    "url": "assets/js/18.bf37913f.js",
    "revision": "c4eb1f7d208b53c30bd139d83ffadd08"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.ba816de0.js",
    "revision": "84e51e21119f63992667df9e46bdb8d4"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "fbd47d94d87ab3c2e5a0918ca1566846"
  },
  {
    "url": "categories/java/index.html",
    "revision": "231496e98f69bfa771763d0e6fcc34ba"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f79dae6d8925e6fdadb00e0020ee9e27"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bc946b858476fb557f6131bcd0da0a85"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2145a784d4b94deda323b2918fb3e9ee"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f71ea6667f3c4ee180e8dc599331bb18"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c43a02405adbfad1f49676c57f0e139e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4d410bff9030f1343154f91b78e171ed"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "00df8e04473041510fda3eec5b393bc6"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6ccf0551769089f190f058300bb71a02"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c3e26767e56c2d5fbbde8ac8ee0d3ba7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "217a4a5ad61a89ab8239cfddc1c81407"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "88906e3a7744a14cfd1c491efced7f0d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8b7c98dc09606c2dd8b0262817844ec5"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "831e46f0e7d4576339c7f8ce3696fbd2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "29ae3f93df4bf9c8c25258275d405632"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e47fe82680d7e8f63ea3b196543356d6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2a7a06bfcca025b6860ef98bec701367"
  },
  {
    "url": "timeline/index.html",
    "revision": "ee4537002bef8a75e379a398e11889e7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6bf889a7a42631ca3aa9eb98f542dc82"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "75e78efcb0fbb3a1df71130c156500c4"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "124593eb27bf20fde5bda7c3630a3c31"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a55fa9c7702a3a90d45530fc6f4fab90"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3d88463027de28b562bfe1a9dcadb704"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
