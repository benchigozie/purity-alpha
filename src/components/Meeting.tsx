"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Meeting () {
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"inspection-session"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{light: { "cal-brand": "#0F172A" }, dark: { "cal-brand": "#0F172A" },},"hideEventTypeDetails":false,"layout":"month_view"});
    })();

    const handleMessage = (e: any) => {

      if (e.origin !== "https://app.cal.com") return;

      const type = e.data?.type;
       
          

          if (type === "bookingSuccessful" || type === "bookingSuccessfulV2") {
            if (window.gtag) {
              window.gtag("event", "cal_booking_completed", {
                session_type: "inspection",
                source: "cal_embed",
              });
            }
            if (window.fbq) {
              window.fbq("track", "Schedule", {
                content_name: "Inspection Session",
              });
            }
          }
      
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };

  }, [])

  

  
  
  return <Cal namespace="inspection-session"
    calLink="alpha-media/inspection-session"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}}
  />;
};

  





export { Meeting };