$("#save").click(function () {
                if (Modernizr.localstorage) {
      
                    saveToLocal();
      
                    if (isOnLine()) {
                        saveToServer();
                    }
                }
                else {
                    alert("AlwaysNote requires local storage.");
                }
            });

function reportOnlineStatus() {
    var status = $("#onlineStatus");
    
    if (isOnLine()) {
        status.text("Online");
        status.
            removeClass("offline").
            addClass("online");
    }
    else {
        status.text("Offline");
        status.
            removeClass("online").
            addClass("offline");
    }
}

window.addEventListener("online", function (e) {
alert("WINDOW ADD EVENT");
    reportOnlineStatus();
    saveToServer();
}, true);
    
window.addEventListener("offline", function (e) {
    reportOnlineStatus();
}, true);

window.applicationCache.onupdateready = function (e) {
    applicationCache.swapCache();
    window.location.reload();
}
