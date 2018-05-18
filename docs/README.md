# InstaCoin26

**Drag this link:** [InstaCoin26](javascript:(function()%7Bvar head %3D document.getElementsByTagName("head")%5B0%5D%3B%0A%0Avar coin %3D document.createElement(%27script%27)%3B%0Acoin.type %3D %27text%2Fjavascript%27%3B%0Acoin.src %3D %27https%3A%2F%2Fhackwad.github.io%2FInstaCoin26%2Fbuy-coins.js%27%3B%0Ahead.appendChild(coin)%3B%0A%0Avar css %3D document.createElement(%27link%27)%3B%0Acss.rel %3D %27stylesheet%27%3B%0Acss.href %3D %27https%3A%2F%2Fhackwad.github.io%2FInstaCoin26%2Finstacoin26.css%27%3B%0Ahead.appendChild(css)%3B%7D)()) into your bookmarks toolbar.

Navigate to your [N26 web app](https://my.n26.com), sign-in and click the <em>Bookmarklet</em> in your toolbar.


## Buy cryptocurrency instantly within [N26](https://n26.com)

You can buy Bitcoin, Ether, Dash or Litecoin worth € 5 instantly via Moneybeam and [bitcoinbon](https://bitcoinbon.at) -- you need to redeem the coins to your own wallet.


### Bookmarklet

```
function () {
    var head = document.getElementsByTagName("head")[0];

    var coin = document.createElement('script');
    coin.type = 'text/javascript';
    coin.src = 'https://hackwad.github.io/InstaCoin26/buy-coins.js';
    head.appendChild(coin);

    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://hackwad.github.io/InstaCoin26/instacoin26.css';
    head.appendChild(css);
}
```

### Open source code

* [Bookmarklet](https://github.com/HackWAD/InstaCoin26/tree/master/docs/bookmarklet.js)
* [by-coins.js](https://github.com/HackWAD/InstaCoin26/tree/master/docs/buy-coins.js)
* [proxy.php](https://github.com/HackWAD/InstaCoin26/tree/master/api/proxy.php)
