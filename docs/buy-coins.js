function initInstaCoin26() {
    // alert("Init: InstaCoin26 ...");

    if (window.location.host != 'my.n26.com') {
        window.location.replace('https://my.n26.com');
    }

    var $invite = $('.UIHeader__invite-friends'),
        $accountInfo = $('.UIHeader__account-infos'),
        $InstaCoin26 = $('<div id="instacoin26" class="UIHeader__account-infos"><em>InstaCoin26:</em> <span class="instacoin26-info" title="Available: Bitcoin / Ether / Dash / Litecoin">Buy cryptocurrencies for € 5 instantly!</span> <span class="hidden instacoin26-form">Confirm with your <input class="instacoin26-pin" type="password" name="instacoin26-transaction-pin" placeholder="PIN" autocomplete="off" /> <button class="instacoin26-buy">Buy now for € 5</button></span></div>');


    $invite.html($InstaCoin26).attr('href', '#instacoin26');
    $invite.attr('href', '#instacoin26').on('click', function(e) {
        e.preventDefault();

        $('.instacoin26-form').removeClass('hidden');
        $('.instacoin26-info').addClass('hidden');
    });

    $('.instacoin26-buy').on('click', function(e) {
        e.preventDefault();

        // alert("InstaCoin26: processing your request ...");

        // https://api.tech26.de/api
        var bearer = cookieValue('num26token'),
            pin = $('.instacoin26-pin').val(),
            api = "https://wad2018.coinfinity.co/InstaCoin26/api/proxy.php?token=" + bearer + "&url=https://api.tech26.de/api";

        $('.instacoin26-form').html('Processing request ...');

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
                    // alert('AccountID: ' + data.account.id + ' -- ' + data.userInfo.firstName + ' ' + data.userInfo.lastName);

                    // screencast #hackWAD
                    $('.instacoin26-form').html('<a href="https://www.bitcoinbon.at/index.en?c=436B-88F1-AACA-604B-E2C7">Transfer coins now to your wallet.</a>');

                    // save data.userInfo for KYC reasons ...
                    // do real transaction

                    /*
                    $.ajax({
                        type: 'POST',
                        url: api + '/transactions',
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        data: JSON.stringify({
                            "pin": pin,
                            "transaction": {
                                "partnerPhone": "+436605083280",
                                "amount": 0.01,
                                "type": "FT",
                                "partnerName": "HackWAD Bitcoinbon",
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

                                // send data.id to backend & get bitcoinbon voucher code
                            } else if (data.bitcoinbon != '') {
                                $('.instacoin26-form').html('<a href="' + data.bitcoinbon + '">Redeem Coins now.</a>');
                            }
                        },
                        error: function(data) {
                            alert('/transaction error');
                        }
                    });
                    */

                }
                /* else if (data.bitcoinbon != '') {
                                   $('.instacoin26-form').html('<a href="' + data.bitcoinbon + '">Redeem Coins now.</a>');
                } */
            },
            error: function(data) {
                alert('/me error');
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