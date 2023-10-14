let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "static/js/bundle.js",
        "static/js/0.chunk.js",
        "static/js/main.chunk.js",
        "index.html",
        "/",
        "/trip",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) return response;
        else {
          return fetch(event.request) //fetch from internet
            .then(function (res) {
              console.log("belo");
              return caches.open(cacheData).then(function (cache) {
                cache.put(event.request.url, res.clone()); //save the response for future
                return res; //fetch from internet
              });
            });
        }
      })
      .catch(() => caches.match("index.html")) //if internet is not available then show index.html
  );
});
