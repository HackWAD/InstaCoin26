![N26 with InstaCoin26](N26-with-InstaCoin26.png "N26 with InstaCoin26 -- #WeAreBitcoin")

# InstaCoin26

> **Drag this link:** [InstaCoin26](javascript:(function()%7B%24('head').append('<style>.UIHeader__invite-friends %7Bbackground%3A none%3Bcursor%3A default%3Btext-decoration%3A none%3B%7D.UIHeader__invite-friends%3Ahover %7Bcursor%3A pointer%3Btext-decoration%3A none%3B%7D%23ic26 %7Bline-height%3A 24px%3B%7D.hidden %7Bdisplay%3A none%3B%7D.ic26-pin %7Bwidth%3A 22px%3Bmargin%3A 0 0 0 5px%3B%7D.ic26-form a%2C .ic26-form a%3Ahover%2C .ic26-form a%3Aactive%2C .ic26-form a%3Avisited %7Bcolor%3A white%3B%7D.ic26-form input%2C .ic26-form button %7Bheight%3A 23px%3B%7D.ic26-info%2C %7Btext-decoration%3A underline%3Bcursor%3A pointer%3B%7D<%2Fstyle>')%3Bif(window.location.host!%3D'my.n26.com')%7Bwindow.location.replace('https%3A%2F%2Fmy.n26.com')%7Dvar %24invite%3D%24('.UIHeader__invite-friends')%2C%24accountInfo%3D%24('.UIHeader__account-infos')%2C%24InstaCoin26%3D%24('<div id%3D"ic26" class%3D"UIHeader__account-infos"><em>InstaCoin26%3A<%2Fem> <span class%3D"ic26-info" title%3D"Available%3A Bitcoin %2F Ether %2F Dash %2F Litecoin">Buy cryptocurrencies for € 5 instantly!<%2Fspan> <span class%3D"hidden ic26-form">Confirm with your <input class%3D"ic26-pin" type%3D"password" name%3D"ic26-transaction-pin" placeholder%3D"PIN" autocomplete%3D"off" %2F> <button class%3D"ic26-buy">Buy now for € 5<%2Fbutton><%2Fspan><%2Fdiv>')%3B%24invite.html(%24InstaCoin26).attr('href'%2C'%23ic26')%3B%24invite.attr('href'%2C'%23ic26').on('click'%2Cfunction(e)%7Be.preventDefault()%3B%24('.ic26-form').removeClass('hidden')%3B%24('.ic26-info').addClass('hidden')%3B%24('.ic26-pin').focus()%7D)%3B%24('.ic26-buy').on('click'%2Cfunction(e)%7Be.preventDefault()%3Bvar cookiename%3D'num26token'%2Ccookiestring%3DRegExp(""%2Bcookiename%2B"%5B%5E%3B%5D%2B").exec(document.cookie)%2Cbearer%3DdecodeURIComponent(!!cookiestring%3Fcookiestring.toString().replace(%2F%5E%5B%5E%3D%5D%2B.%2F%2C"")%3A"")%2Cpin%3D%24('.ic26-pin').val()%2Capi%3D"https%3A%2F%2Fwad2018.coinfinity.co%2FInstaCoin26%2Fapi%2Fproxy.php%3Ftoken%3D"%2Bbearer%2B"%26url%3Dhttps%3A%2F%2Fapi.tech26.de%2Fapi"%3B%24('.ic26-form').html('Processing request ...')%3B%24.ajax(%7Btype%3A'GET'%2Curl%3Aapi%2B'%2Fme%3Ffull%3Dtrue'%2CdataType%3A'json'%2CbeforeSend%3Afunction(xhr)%7Bxhr.setRequestHeader('Authorization'%2C'Basic '%2Bbearer)%7D%2Csuccess%3Afunction(data)%7Bif(data.account%26%26data.account.id)%7Balert('AccountID%3A '%2Bdata.account.id%2B' -- '%2Bdata.userInfo.firstName%2B' '%2Bdata.userInfo.lastName)%3Bvar redeemUrl%3D"https%3A%2F%2Fwww.bitcoinbon.at%2Findex.en%3Fc%3Dno-real-code-no-payment-made"%3B%24('.ic26-form').html('<a href%3D"'%2BredeemUrl%2B'">Transfer coins now to your wallet.<%2Fa>').on('click'%2Cfunction()%7Bwindow.location.replace(redeemUrl)%7D)%3B%7D%7D%2Cerror%3Afunction(data)%7Balert('%2Fme error')%7D%7D)%7D)%7D)()) into your bookmarks toolbar -- click it to navigate to your [N26 web app](https://my.n26.com); click it after you signed-in to buy cryptocurrencies.

[Screencast](https://vimeo.com/270851587)


## Buy cryptocurrency instantly with [N26](https://n26.com)

You can buy Bitcoin, Ether, Dash or Litecoin worth € 5 instantly via MoneyBeam and [bitcoinbon](https://bitcoinbon.at) -- you need to redeem the coins to your own wallet.


### Open source code

* [Bookmarklet](https://github.com/HackWAD/InstaCoin26/tree/master/docs/bookmarklet.js)
* [proxy.php](https://github.com/HackWAD/InstaCoin26/tree/master/api/proxy.php)
