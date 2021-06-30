$('.contact').on('click', () => {
    gtag('event', 'lead_generated', {
        userid: Cookies.get('userid'),
        transaction_id: uuidv4(),
        action: "form_submission",
        elementName: "Contact us.",
        deviceType: get_device(),
        browser: get_browser(),
        date: new Date().toString(),
        session: Cookies.get('session_num'),
        pageUrl: window.location.href,
        website: "My site",
        entry_point: Cookies.get("entry_point")
    })
}) // end of listener