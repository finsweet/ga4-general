$('.button').on('click', () => {
    gtag('event', 'user_click', {
        value: 1,
        type: "buttonClick",
        pageUrl: window.location.href,
        elementName: "learn more",
        browser: get_browser(),
        generate_lead: false,
        website: "My site",
        entry_point: Cookies.get('entry_point'),
        session: Cookies.get('session_num'),
        action: "",
        deviceType: get_device(),
        date: new Date().toString(),
        userid: Cookies.get('userid')
    })
})// end of listener