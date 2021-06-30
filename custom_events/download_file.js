$('.download').on('click', () => {
    gtag('event', 'download_file', {
        userid: Cookies.get('userid'),
        transaction_id: uuidv4(),
        elementName: "Download PDF.",
        deviceType: get_device(),
        browser: get_browser(),
        date: new Date().toString(),
        session: Cookies.get('session_num'),
        pageUrl: window.location.href,
        website: "My site",
    })
}) // end of listener