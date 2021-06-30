if (Cookies.get('userid')===undefined){
    gtag('event', 'first_visit', {
        userid: Cookies.get('userid'),
        deviceType: get_device(),
        browser: get_browser(),
        date: new Date().toString(),
        pageUrl: window.location.href,
        website: "My site",
    })
} // end of if statement