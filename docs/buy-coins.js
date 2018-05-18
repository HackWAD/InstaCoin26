function initBuyCoins() {
    // alert("Init: InstaCoin26 ...");
    // console.log("Init: InstaCoin26 ...");

    var $invite = $('.UIHeader__invite-friends'),
        $accountInfo = $('.UIHeader__account-infos'),
        $InstaCoin26 = $('<div id="instacoin26" class="UIHeader__account-infos">InstaCoin26</div>');


    $invite.replace($InstaCoin26);

    // $accountInfo.append($InstaCoin26);

}

initBuyCoins();