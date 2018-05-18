function initInstaCoin26() {
    // alert("Init: InstaCoin26 ...");

    var $invite = $('.UIHeader__invite-friends'),
        $accountInfo = $('.UIHeader__account-infos'),
        $InstaCoin26 = $('<div id="instacoin26" class="UIHeader__account-infos">InstaCoin26: <span class="instacoin26-info">Buy € 5 Cryptocoins instantly!</span> <span class="hidden instacoin26-form">Confirm with <input class="instacoin26-pin" type="password" placeholder="PIN" /> <button class="instacoin26-buy">Buy for € 5</button></span></div>');


    $invite.html($InstaCoin26).attr('href', '#instacoin26');
    $invite.attr('href', '#instacoin26').on('click', function(e) {
        e.preventDefault();

        $('.instacoin26-form').removeClass('hidden');
        $('.instacoin26-info').addClass('hidden');

    });

    $('.instacoin26-buy').on('click', function(e) {
        e.preventDefault();

        alert("InstaCoin26: processing your request ...");
    });
}

initInstaCoin26();