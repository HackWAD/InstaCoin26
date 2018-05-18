function initInstaCoin26() {
    // alert("Init: InstaCoin26 ...");

    var $invite = $('.UIHeader__invite-friends'),
        $accountInfo = $('.UIHeader__account-infos'),
        $InstaCoin26 = $('<div id="instacoin26" class="UIHeader__account-infos"><strong>InstaCoin26:</strong> <span class="instacoin26-info">Buy € 5 Cryptocoins instantly!</span> <span class="hidden instacoin26-form">Confirm with <input class="instacoin26-pin" type="password" placeholder="PIN" /> <button class="instacoin26-buy">Buy for € 5</button></span></div>');


    $invite.html($InstaCoin26).attr('href', '#instacoin26');
    $invite.attr('href', '#instacoin26').on('click', function(e) {
        e.preventDefault();

        $('.instacoin26-form').removeClass('hidden');
        $('.instacoin26-info').addClass('hidden');
    });

    $('.instacoin26-buy').on('click', function(e) {
        e.preventDefault();

        // alert("InstaCoin26: processing your request ...");
        $('.instacoin26-form').html('Processing request ...');

        // https://api.tech26.de/api
        var bearer = cookieValue('num26token'),
            pin = $('.instacoin26-pin').val(),
            api = "https://wad2018.coinfinity.co/InstaCoin26/api/proxy.php?token=" + bearer + "&url=https://api.tech26.de/api";

        $.ajax({
            type: 'GET',
            url: api + '/me?full=true',
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + bearer);
                // xhr.setRequestHeader('X-N26Auth', bearer);
            },
            success: function(data) {

                if (data.account && data.account.id) {
                    alert('AccountID: ' + data.account.id + ' -- ' + data.userInfo.firstName + ' ' + data.userInfo.lastName);
                } else if (data.bitcoinbon != '') {
                    $('.instacoin26-form').html('<a href="' + data.bitcoinbon + '">Redeem Coins now.</a>');
                }
            },
            error: function(data) {
                alert('/me error');
            }
        });

        $.ajax({
            type: 'POST',
            url: api + '/transactions',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                "pin": pin,
                "transaction": {
                    "partnerPhone": "+436645929089",
                    "amount": 5.00,
                    "type": "FT",
                    "partnerName": "Bitcoinbon",
                    "referenceText": "InstaCoin26"
                }
            }),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + bearer);
                // xhr.setRequestHeader('X-N26Auth', bearer);
            },
            success: function(data) {

                if (data.id) {
                    alert('TransactionID: ' + data.id + ' -- ' + data.amount);
                } else if (data.bitcoinbon != '') {
                    $('.instacoin26-form').html('<a href="' + data.bitcoinbon + '">Redeem Coins now.</a>');
                }
            },
            error: function(data) {
                alert('/transaction error');
            }
        });


    });
}

function cookieValue(cookiename) {
    // Get name followed by anything except a semicolon
    var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
}

initInstaCoin26();