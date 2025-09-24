'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b5fbb36a9ae189b9b13022ce0d49153e",
"version.json": "7e1aa7469f11408769fd6d0f448b3a1a",
"cors_config.json": "ee2cbbdad6c9b6e046498fc9f80dcd67",
"index.html": "8af3a96168f6c673be4a3dac7f4b7633",
"/": "8af3a96168f6c673be4a3dac7f4b7633",
"main.dart.js": "ef509030e8d4bd0d62a7328c4365e270",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6bba659dafc4b56582eb55633e6062a3",
".git/ORIG_HEAD": "381bc77bada90a43e40edec6e32bc16b",
".git/config": "40677bf9dd722eaeea94600c4d2bf78f",
".git/objects/92/bd4c4c79b6cc72c5655422ee43c5d43863afeb": "866302acb5569ccca539c30f8bb0eb9b",
".git/objects/66/fc3b84b4cc6f1cce286ac4b55415c9a18d3298": "07f25a5813c13eb8399e341580c24237",
".git/objects/66/d8b8489620d7cd75a79437c3c40959275bb70c": "ee62430f5b81d40ae14f72169b4b0d89",
".git/objects/66/933439b75e3cc24edb394f96fcd6eb5170a433": "0aa9ffc8b3d3deb6ab5c217f1f4d7b2a",
".git/objects/6f/560fdfd008bca00eb1144aefbb6645479ecf41": "6135f6f4b19ced0e1344b68c445d1fbf",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/6f/1622ea7ffd45d534c9d45ab2fdb05b86f47715": "1cb035a74ccc3fa3dc5f8e7359570e44",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/69/f1258dc5bd5d48a5e633a953d9bed03d8fe6b6": "be8fbb49cefe3affce389bd5e142595e",
".git/objects/69/a7c757018158b17545a29b8c548eb5d52378bf": "85c8bc9ca5bbdec57388ef840827b2e4",
".git/objects/67/e3273e8d6ecd464149552cefdf3d2e16818bcc": "d3f0831d8be261d0d750a2415895a1c0",
".git/objects/bb/710bd7322ae41be9d96dffd4b77dacaf152bb8": "1403b9c5f71793d6146a2fbf31dacd50",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/da/c9b21d7ef3f57d9de51b6c3f2a34accf568a4c": "3cdf9c17b0abb0f652ec936437122317",
".git/objects/d1/7c458278a6144fbb404f77e1f9f2efe289bee1": "34a1b3ab24a4c6c20bafec5e1c23f424",
".git/objects/d1/1c9cab508f5546140e44597ae179b738ab5659": "42b84cafb484ee11a7aeb5483fd46da0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6ab87d9aec9d3544ba9724ab659d5ac57a3bef": "72624fdedfcb14a7141ea35f25fe8c8c",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/d8/68eeab7d896d9cd3894a2fe4a5da3b6efab42f": "e06f19249204949f8fb7a6607bdda932",
".git/objects/ab/0aa35702bc6aa0d1cb399caaa82784cefdde56": "f46e8e4bbfa45ca20981b3c50f39b9ef",
".git/objects/f4/0368222419feeb3fdde0d8a3663d5ef90347c4": "465f941583e8aca4c5eefd5126a7f709",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a161f98a6d6461b3c71ae376d9e27f91040905": "eff0dac213045100a1dd30ccd3d7d2ea",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/23608104b37523f4f4cab6e7899b38dc3e33e4": "0a5294e495661c4ea78bced274ea05ef",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/c27042ec7d0d4051cd36c257dac5ab0aec8f46": "bb8b41251cbba725fbf7d503ebdd32eb",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/aeb1101d5c2ec2c036fddad7eec30441675478": "802726b4e169aa64c497a5e84d01c5b9",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/54b49c56d553412be6d2c2f794680290015a34": "c461211f8dc5d3e3eace1b2384338e2c",
".git/objects/4e/285036ef1946da0fea73e14eacd9e7f823e8f7": "42342364cbb487100ce12da24b825303",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/c85d7e699f8ce35019be9f40c0a6edb6e5a126": "730b14c3244162fba805fefab04c3c34",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/42/de222041b8b562a5f19b0c9827c448cb281a57": "90ed67dcb69bfe080649b437c20426b3",
".git/objects/1a/034355bfca86208e5776a3f1e5ff9d8eca1936": "e6f507971f3adf7a08efc4e49b214462",
".git/objects/28/3d21617b85c5bb15d5a2680518f75cab55acec": "7202d59930216f4b07dd8e26db141cab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/97229043c76a3fe14016275377c1d39d6d64ef": "fbefa1128e39b926a37343432b1bfe4c",
".git/objects/26/f965b5afb79b789f260042b0db842f86e2535a": "c4771908dabd02ddfad39bccf6661f51",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/936affa9c334ebb1b4f0dc576b0c6da59b9e67": "8b23978e830b77ec010f0caf4ae1bd59",
".git/objects/2a/b3e23133b07de661aa9b9327d081e7f134ed04": "33f4cb2ec73128c08d9470e2afd530c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/3a/299fe6e7012c01637815d748dc1b7dacc317d8": "dc9c69cce9cd84aca3fe7483d3183b1e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/b19c350f66943497d03919d67a593e01849ab5": "46549e182badbc1097b5e9299a20a3d4",
".git/objects/5e/d2d83040ac1d863a5591312ef83c10683bf3b3": "87e18ecbf5fad0d4f18bfe84b230a24f",
".git/objects/08/89c272fed52774156cae8df0fc1eaa35886e94": "717d6999699e5edf7b03826664f1f534",
".git/objects/6d/3f349293baa04981beee8d9261836017b71945": "da1090bc7e29b94812e6fc717ec19e49",
".git/objects/01/4713ad92573335b0fa208fdcf4ea013c311d57": "7abf49cc77b09c9d06a6840ee80dcf76",
".git/objects/97/b1f558b7fa1fd2cb5fd24d316b677eabcf39e7": "e9dc347316e1374e0905c5bc0cc8d19b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/bc8c370142ea626f7e69a9494f1c7ad45fdb62": "7bdbee19752f5554ca7fd9fbbdd22357",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/35b5db35d83503e7ce8bbe0f4592a796502368": "ebb30c97d5c8083833b74ca00bb6a390",
".git/objects/b6/3e7df3237424255475846e5a7462bd735f6a35": "7680e9da8313ceef7589a363554fd5f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/2eb0512ce7bda35d9212eb4cccbb0cf13927d6": "4940604b260800dee9884c4952c4840a",
".git/objects/a8/f5ab6e8dc4f13fe67ff97df90b8f3c3148967f": "4175b5a848dac55735e91e70eba9b399",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8dfac4ff197f44e6de2bdba3caaccb33c45c32": "77200c0843b01f5fcae826a1c312fcdb",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/ba0c5e088000b49012647832aaabe5da3afba3": "ad22838b8bc6a7175af573d164ec20be",
".git/objects/e1/2444349360fab42b3e2d026914d2f13a197b6f": "3b7bf7eac334bf40136e869b56c03ee3",
".git/objects/e1/3041316ed548bf9a28b726172b6169ccc5e920": "359ecb932e75ecba86f241fcb06fdb21",
".git/objects/f0/4fe736bb9ea26c71447928fcd7400f6cd1fdc6": "99600617c39917d635b44036cf74fe66",
".git/objects/ff/a5d372b0b8d2a27f1d3b463b06e57df86eb57b": "28384a68dbab7ccf3feaae7f4a143cea",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/79/bc14ecf0b3d704ae1a6eede81e5a6306997e3c": "21f1fb3b17dc88e204d8883ebb4f0038",
".git/objects/77/9034f8a495ac15a48195d6ef4af5b43120ee31": "51885057f37955f993ca5a9a446c20fc",
".git/objects/1e/338899658a7b00366ed70f3a884bfc88d74b83": "f7756a7cdce0c1499c01c219d60b6779",
".git/objects/4a/e88f4784c55809f1aa88adea4a823d9ed5b7eb": "dec0fe2b87c4cb6396b42d28c1553641",
".git/objects/4a/3da636ec78e95ee8de1e2d656d61196859f257": "283d45e3c57aa03fcc4d1aeef2fae26b",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/15/2453d25863e73c2c56d1a3d2a6ae4b45de64db": "4541f183c4b3bc678b053dc61fbf57c9",
".git/objects/1d/86a175ebd84b8f72b49b0f3257caafb097a089": "f629ca9ade5c653776f9c40ba0b6d4e5",
".git/objects/2e/d5bc8529c2aacb559dde624b1e253744250f69": "1e811200b121dbd7b4d37770fae147a3",
".git/objects/47/b4dc29a67e190ec5132f0ced987f84ed0a3ccd": "afd30b0f4e754c8068f465277db5cf83",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/25/1eac00cab914c5c94d5fe35eb47dd40d6c6ad9": "d25c90d02b82658ac5c6184645190680",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6ea4ba773d162d982a925b1b422c687",
".git/logs/refs/heads/main": "c6ea4ba773d162d982a925b1b422c687",
".git/logs/refs/remotes/origin/HEAD": "ed2b7947bdd303e4bd257da57bb10b5a",
".git/logs/refs/remotes/origin/main": "1383083caf830e3b79d59786f409b551",
".git/description": "9823bd7e3ebc8d1a7cdb477f534e343b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1ec88e37e3ee5b8a70380b7d0846b6f9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "1ec88e37e3ee5b8a70380b7d0846b6f9",
".git/index": "8d147ba0f2e81e13251a9d4641fce7cf",
".git/COMMIT_EDITMSG": "9c8b4e9910f6c84162c6ed730823046c",
".git/FETCH_HEAD": "1e0517d3a4e0159da741fd6c76eab49b",
"assets/AssetManifest.json": "f8a24ca3b0bc7592d98619a6821757db",
"assets/NOTICES": "dbc4c626bdfb5a586faf1afc434f7b76",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/AssetManifest.bin.json": "c2b99011e03cf9807d8f6b5513a6478c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "30b87951bbdbc515c93542db0644cce6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2b457ed62ed54b0d8dba00d1ddce6df7",
"assets/fonts/MaterialIcons-Regular.otf": "25ba5cf3424ed1ed3836d4457c306ae0",
"assets/assets/Projects_images/minute_matrixs.jpeg": "37bbbbc11996c14382ce60796c314ee0",
"assets/assets/Projects_images/ecommerce.jpeg": "6f489f3fdb613b79ae9eddef1c2128a5",
"assets/assets/Projects_images/youtube.jpeg": "a66a26f0601ffdb78a698da2b8a55494",
"assets/assets/Projects_images/pos.jpeg": "ba899958a76a8d9e2a1f8a135d2d8c28",
"assets/assets/Projects_images/qsr.jpeg": "8d2bbdd07f53e855de1fa7ae08b5abce",
"assets/assets/Projects_images/taxi_rent.jpeg": "4e394d3921b44d7c7147529c52374d5f",
"assets/assets/Suleman_Ahmad_Resume_.pdf": "e5dacb9aff221e3ea2bccef6abdaad5a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
