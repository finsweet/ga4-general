if (Cookies.get('entry_point')===undefined){  
    gtag('event', 'start_point', {
        value: 1,
        date: new Date().toString(),
        userid: Cookies.get('userid'),
        browser: get_browser(),
        website: "My site",
        pageUrl: window.location.href,
        deviceType: get_device()
    });
} // end of if statement