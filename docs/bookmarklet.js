var head = document.getElementsByTagName("head")[0];

var coin = document.createElement('script');
coin.type = 'text/javascript';
coin.src = 'https://hackwad.github.io/InstaCoin26/buy-coins.js';
head.appendChild(coin);

var css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'https://hackwad.github.io/InstaCoin26/instacoin26.css';
head.appendChild(css);