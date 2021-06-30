// detect if the user is about to leave the page
window.addEventListener('beforeunload', function(e) { 
    // Tracking time sent on the website.
    let timeSpent = (new Date() - startTime) / 1000
    // send spent time custom event to gtag.
    if(Cookies.get('userid') !== undefined){
        gtag('event', 'time_spent', {
            value: 1,
            timeSpent,
            units: 'seconds',
            website: "My site",
            date: new Date().toString(),
            session: Cookies.get('session_num'),
            pageUrl: window.location.href.split("?")[0],
            browser: get_browser(),
            userid: Cookies.get('userid'),
            deviceType:get_device()
        }); 
    }
})