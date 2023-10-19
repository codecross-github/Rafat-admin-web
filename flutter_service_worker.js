'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "94268cb86f97e71e23b5ffcf733b27cf",
"assets/AssetManifest.json": "86b74a1a582c2482202c649c9aef7e78",
"assets/assets/images/accounts.svg": "e71d24541b632e1ef17b980a2ade84b6",
"assets/assets/images/add.svg": "8ea1ef81b44f96d54b5585cdbc7d4da7",
"assets/assets/images/addNew.svg": "056d1de899a929e9de358e5a520a94b5",
"assets/assets/images/admin.svg": "2f96f5896e71f7563834f6bbfc8cb1c3",
"assets/assets/images/arrowUp.svg": "f52cd4e7a4b8f0d7659b1d558cc30ed9",
"assets/assets/images/cardHome.png": "7ffd3ae9d8d56982c5352ad14553ccb0",
"assets/assets/images/cardHome.svg": "7918c59cf736637aa59f22361693d19e",
"assets/assets/images/celsius.svg": "f6ef0ab854cf04bad4ead9d268ea32ca",
"assets/assets/images/cloud.png": "b326315f5b53cd17e931d3265e37eb2f",
"assets/assets/images/cloud.svg": "a72c0bc74a024557c7b270bbf27368fc",
"assets/assets/images/cloudy.svg": "4a3e0357cbb534b3334f210dd1ae21c9",
"assets/assets/images/delete.svg": "759fbd302fe77dccc371286da056cb34",
"assets/assets/images/dropDown.svg": "a1c10ceb60a8cdebe39f2874f0af6a3a",
"assets/assets/images/edit.svg": "f21dfc5148fbec2cfdfc2e174880bb13",
"assets/assets/images/edit_profile.svg": "61133119641c99df252a7d835291a134",
"assets/assets/images/ellipse.svg": "26b47dc4e061140a54be353aaa2f915d",
"assets/assets/images/email.svg": "81610ba5168412400dd1d22b9f8bb3ab",
"assets/assets/images/emp_type.svg": "134a4616feb6a1af8eedd76bb225fc61",
"assets/assets/images/forward.svg": "cda16c636a9b9698681e9cae10763c76",
"assets/assets/images/license_type.svg": "62000dde01afc65421ba477aa2ae276b",
"assets/assets/images/location.svg": "8ca266f51551f4dccfc64d8484ebb081",
"assets/assets/images/logo.png": "94fbee54f0271a46283c7d2b9562502a",
"assets/assets/images/logo.svg": "9b547ca218d8bca3f79c628de05cf9fd",
"assets/assets/images/logout.svg": "4cd0523ee9bad4d730d606609dac79a1",
"assets/assets/images/map.png": "cfc6bb66e66ba2f72a9e2bd6d298e938",
"assets/assets/images/menu.svg": "f8bd91848f5ebec7c9f35cd4fa03fbf7",
"assets/assets/images/message.svg": "f1ad8ca781dfa96526cf764a78975e84",
"assets/assets/images/next.svg": "d931c3ef8883622776ee44c52f44fb8b",
"assets/assets/images/password.svg": "f3938b9e9b2e1f33751a85604134bad6",
"assets/assets/images/person.png": "b8652b119ac8689bc7965f49dea8ffd9",
"assets/assets/images/pervoius.svg": "2dab5715e1566fabf60b1f712fadc9f7",
"assets/assets/images/phone.svg": "f69f32d0c3198da5eab4741febd03b9f",
"assets/assets/images/profile.svg": "673620d0b472d89ee6f1dd90f6465e8a",
"assets/assets/images/profileBig.svg": "09afa6ac33d521a672cc7ab4917fe007",
"assets/assets/images/search.svg": "a49184da0b8d00fd7b83de1c9adcd918",
"assets/assets/images/sorting.svg": "e0b91d2d958e87b09929eff6f2335294",
"assets/assets/images/toggle.svg": "d2f74c9eb3f18f1917ea0ad5bcb7a56b",
"assets/assets/images/videoDisplay.png": "97823afb776ce739ea2cdaad6d4be7d6",
"assets/assets/images/videoPlay.png": "c770d1f2ae6864e4592ada4ac19fe774",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f82d16e4eeeeea03f3b70a761c563eb5",
"assets/NOTICES": "a03fa3134dabcd5bbecf79f6b8b1ec95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "fc8b65b1bf54fe6710c9b60c7e0a3373",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "7532fdb546edb157b751e94e9d5b5839",
"icons/Icon-512.png": "fc8b65b1bf54fe6710c9b60c7e0a3373",
"icons/Icon-maskable-192.png": "7532fdb546edb157b751e94e9d5b5839",
"icons/Icon-maskable-512.png": "fc8b65b1bf54fe6710c9b60c7e0a3373",
"index.html": "6d654c750204a9623abb9d8f203a5353",
"/": "6d654c750204a9623abb9d8f203a5353",
"main.dart.js": "af538f8752c23d01aee0017c6412681e",
"manifest.json": "ffb94335cbbb0e68379dfbeb71321ae8",
"version.json": "1e4b96e3cc23285d1fb52d8bf8a053ae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
