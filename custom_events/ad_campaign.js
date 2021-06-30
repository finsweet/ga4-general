let url = new URL(window.location.href);
let source = url.searchParams.get("utm_source");
if (source){
    gtag('event', 'ad_campaign', {
                  value: 1, 
                  userid: Cookies.get('userid'),
                  browser: get_browser(),
                  session: Cookies.get('session_num'),
                  website: "My site",
                  pageUrl: window.location.href.split("?")[0],
                  campaign_name: source,
                  generate_lead: true,
        	      date: new Date().toString(),
                  entry_point: Cookies.get('entry_point'),
                  source: url.searchParams.get("utm_source"),
                  medium: url.searchParams.get("utm_medium"),
                  utm_id: url.searchParams.get("utm_id"),
                  term: url.searchParams.get("utm_term"),
                  utm_content: url.searchParams.get("utm_content"),
                  deviceType: get_device()
    });
}//end if statement