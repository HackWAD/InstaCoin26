function initInstaCoin26() {
    // alert("Init: InstaCoin26 ...");

    var $invite = $('.UIHeader__invite-friends'),
        $accountInfo = $('.UIHeader__account-infos'),
        $InstaCoin26 = $('<div id="instacoin26" class="UIHeader__account-infos">InstaCoin26</div>');


    $invite.html($InstaCoin26).attr('href', '#instacoin26');
    $invite.attr('href', '#instacoin26').on('click', function(e) {
        e.preventDefault();
    });
}

initInstaCoin26();