/** scroll tracking **/
let scrollPercent = 0
$(window).on('scroll', function(){
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    
    scrollPercent = (s / (d - c)) * 100;
})

// detect if the user is about to leave the page
window.addEventListener('beforeunload', function(e) {
    // send scrolled percent custom event to gtag.
    if(Cookies.get('userid') !== undefined){
      gtag('event', 'scrolled_percent', {
        browser: get_browser(),
        website: "My site",
        date: new Date().toString(),
        session: Cookies.get('session_num'),
        value: scrollPercent,
        pageUrl: window.location.href.split("?")[0],
        userid: Cookies.get('userid'),
        deviceType:get_device()
    
      });
    }
})